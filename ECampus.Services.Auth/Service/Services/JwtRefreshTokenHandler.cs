using ECampus.Services.Auth.Data.Repositories;
using ECampus.Services.Auth.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace ECampus.Services.Auth.Services
{
    public class JwtRefreshTokenHandler
    {
        private readonly JwtTokenCreator _tokenCreator;
        private readonly IConfiguration _configuration;
        private readonly IRefreshTokenRepository _tokenRepository;

        public JwtRefreshTokenHandler(JwtTokenCreator tokenCreator, IRefreshTokenRepository tokenRepository, IConfiguration configuration)
        {
            _tokenCreator = tokenCreator;
            _tokenRepository = tokenRepository;
            _configuration = configuration;
        }

        public async Task<(string Token, DateTime Expires)> WriteIfExpiredAsync(User user)
        {
            RefreshToken currentToken = (await _tokenRepository.GetAsync(t => t.UserId == user.Id))?.FirstOrDefault();

            if (currentToken is not null)
            {
                if (currentToken.Expires > DateTime.Now)
                {
                    return (currentToken.Token, currentToken.Expires);
                }
                _tokenRepository.Delete(currentToken);
            }

            var token = _tokenCreator.CreateAuthToken(user);

            RefreshToken newRefreshToken = new()
            {
                Id = Guid.NewGuid().ToString(),
                UserId = user.Id,
                Expires = token.Expires,
                Token = token.Token,
            };

            await _tokenRepository.InsertAsync(newRefreshToken);
            await _tokenRepository.SaveChangesAsync();
            return token;
        }

        public async Task RemoveTokenAsync(string userId)
        {
            var token = (await _tokenRepository.GetAsync(x => x.UserId == userId)).FirstOrDefault();
            if (token is null) return;

            await _tokenRepository.DeleteAsync(token);
        }

        public bool IsTokenValid(string token)
        {
            string signingKeyPhrase = _configuration["SigningKeyPhrase"];
            SymmetricSecurityKey signingKey = new(Encoding.UTF8.GetBytes(signingKeyPhrase));

            JwtSecurityTokenHandler handler = new();

            if (!handler.CanReadToken(token)) return false;

            try
            {
                handler.ValidateToken(token, new TokenValidationParameters
                {
                    IssuerSigningKey = signingKey,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true
                }, out _);
            }
            catch
            {
                return false;
            }

            return true;
        }
    }
}
