using ECampus.Services.Auth.Data.Repositories;
using ECampus.Services.Auth.Models;

namespace ECampus.Services.Auth.Services
{
    public class JwtRefreshTokenHandler
    {
        private readonly JwtTokenCreator _tokenCreator;
        private readonly IRefreshTokenRepository _tokenRepository;

        public JwtRefreshTokenHandler(JwtTokenCreator tokenCreator, IRefreshTokenRepository tokenRepository)
        {
            _tokenCreator = tokenCreator;
            _tokenRepository = tokenRepository;
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
    }
}
