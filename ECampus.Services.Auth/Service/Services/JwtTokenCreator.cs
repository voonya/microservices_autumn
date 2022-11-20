using ECampus.Services.Auth.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ECampus.Services.Auth.Services
{
    public class JwtTokenCreator
    {
        private readonly IConfiguration _configuration;

        public JwtTokenCreator(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public (string Token, DateTime Expires) CreateAuthToken(User user)
        {
            Claim[] claims =
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Typ, "Auth")
            };

            var signingKeyPhrase = _configuration["SigningKeyPhrase"];
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKeyPhrase));
            var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            DateTime expires = DateTime.UtcNow.AddMinutes(20);

            var token = new JwtSecurityToken(signingCredentials: credentials,
                claims: claims,
                expires: expires);

            return (new JwtSecurityTokenHandler().WriteToken(token), expires);
        }
    }
}
