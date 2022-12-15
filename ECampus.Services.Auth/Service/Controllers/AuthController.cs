using System.Text.Json;
using Confluent.Kafka;
using ECampus.Services.Auth.Constants;
using ECampus.Services.Auth.Dtos;
using ECampus.Services.Auth.Models;
using ECampus.Services.Auth.Services;
using ECampus.Services.Auth.Sync;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECampus.Services.Auth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly JwtRefreshTokenHandler _tokenHandler;
        private readonly JwtTokenCreator _tokenCreator;
        private readonly HttpSyncClient _syncClient;
        private readonly IProducer<Null, string> _producer;

        public AuthController(JwtRefreshTokenHandler tokenHandler, JwtTokenCreator tokenCreator, HttpSyncClient syncClient)
        {
            _tokenHandler = tokenHandler;
            _tokenCreator = tokenCreator;
            _syncClient = syncClient;
            var config = new ProducerConfig
            {
                BootstrapServers = "kafka:9092"
            };
            _producer = new ProducerBuilder<Null, string>(config).Build();
        }

        [HttpGet("IsValid/{token}")]
        [AllowAnonymous]
        public IActionResult IsValid(string token)
        {
            var isValid = _tokenHandler.IsTokenValid(token);

            return isValid ? Ok(true) : ValidationProblem();
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginUserModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = await _syncClient.GetUserByUsernameAsync(model.UserName);

            if (user is null)
                return NotFound();

            if (model.UserName != user.Login || model.Password != user.Password)
                return BadRequest();

            var (token, _) = _tokenCreator.CreateAuthToken(user);
            var (refreshToken, _) = await _tokenHandler.WriteIfExpiredAsync(user).ConfigureAwait(false);

            await SendKafkaMessageAsync(KafkaConstants.LoginEvent, user.Id, user.Login);

            return Ok(new { User = user.Login, Token = token, RefreshToken = refreshToken });
        }

        [HttpPost("Register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterUserModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = new User()
            {
                Login = model.UserName,
                Password = model.Password,
                FirstName = model.FirstName,
                LastName = model.LastName,
                BirthDate = model.BirthDate,
                RoleId = model.RoleId
            };
            var createdUser = await _syncClient.CreateUserAsync(user);
            if (createdUser is null) return BadRequest();

            var (token, _) = _tokenCreator.CreateAuthToken(createdUser);
            var (refreshToken, _) = await _tokenHandler.WriteIfExpiredAsync(createdUser).ConfigureAwait(false);

            await SendKafkaMessageAsync(KafkaConstants.RegisterEvent, user.Id, user.Login);

            return Ok(new { User = createdUser.Login, Token = token, RefresjToken = refreshToken });
        }

        [HttpPost("Logout")]
        [AllowAnonymous]
        public async Task<IActionResult> Logout()
        {
            try
            {
                var userId = User.Claims.FirstOrDefault()?.Value;
                await _tokenHandler.RemoveTokenAsync(userId);
                await SendKafkaMessageAsync(KafkaConstants.LogoutEvent, userId);

                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPost("/broken/Logout")]
        [AllowAnonymous]
        public async Task<IActionResult> BrokenLogout()
        {
            try
            {
                await Task.Delay(10000);
                var userId = User.Claims.FirstOrDefault()?.Value;
                await _tokenHandler.RemoveTokenAsync(userId);

                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        private async Task SendKafkaMessageAsync(string e, string userId, string username = null)
        {
            var kafkaModel = new KafkaAuthDto
            {
                Event = e,
                Date = DateTime.UtcNow,
                Data = new KafkaUserDto
                {
                    Id = userId,
                    Username = username ?? string.Empty
                }
            };

            var json = JsonSerializer.Serialize(kafkaModel, options: new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
            await _producer.ProduceAsync("auth", new Message<Null, string> { Value = json });
        }
    }
}