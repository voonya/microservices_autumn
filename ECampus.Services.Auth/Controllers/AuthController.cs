using ECampus.Services.Auth.Data.Repositories;
using ECampus.Services.Auth.Dtos;
using ECampus.Services.Auth.Models;
using ECampus.Services.Auth.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ECampus.Services.Auth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly JwtRefreshTokenHandler _tokenHandler;
        private readonly JwtTokenCreator _tokenCreator;

        public AuthController(JwtRefreshTokenHandler tokenHandler, JwtTokenCreator tokenCreator)
        {
            _tokenHandler = tokenHandler;
            _tokenCreator = tokenCreator;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginUserModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = MockRepository.User;
            // user = 
            //   await _userManager.FindByNameAsync(model.UserName).ConfigureAwait(false)
            //   ?? await _userManager.FindByEmailAsync(model.Email).ConfigureAwait(false);

            if (user is null)
                return BadRequest();

            // var result = await _signInManager.PasswordSignInAsync(user, model.Password, false, false).ConfigureAwait(false);
            // if (!result.Succeeded)
            //    return BadRequest();

            var (token, _) = _tokenCreator.CreateAuthToken(user);
            var (refreshToken, _) = await _tokenHandler.WriteIfExpiredAsync(user).ConfigureAwait(false);

            return Ok(new { User = user.Name, Token = token, RefresjToken = refreshToken });
        }

        [HttpPost("Register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterUserModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = new User { Id = Guid.NewGuid().ToString(), Email = model.Email, Name = model.UserName };
            // var result = await _userManager.CreateAsync(user, model.Password).ConfigureAwait(false);
            // if (!result.Succeeded)
            //    return BadRequest(result.Errors);

            // await _signInManager.PasswordSignInAsync(user, model.Password, false, false).ConfigureAwait(false);

            var (token, _) = _tokenCreator.CreateAuthToken(user);
            var (refreshToken, _) = await _tokenHandler.WriteIfExpiredAsync(user).ConfigureAwait(false);

            return Ok(new { User = user.Name, Token = token, RefresjToken = refreshToken });
        }

        [HttpPost("Logout")]
        [AllowAnonymous]
        public async Task<IActionResult> Logout()
        {
            try
            {
                // await _signInManager.SignOutAsync().ConfigureAwait(false);

                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }
    }
}