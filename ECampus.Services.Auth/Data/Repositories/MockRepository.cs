using ECampus.Services.Auth.Models;
using System.Linq.Expressions;

namespace ECampus.Services.Auth.Data.Repositories
{
    public class MockRepository : IMockRepostiory
    {
        internal static User User { get; set; } = new()
        {
            Id = Guid.NewGuid().ToString(),
            Name = "Test User",
            Email = "test@test.com"
        };

        internal static List<RefreshToken> RefreshTokens { get; set; } = new()
        {
            new RefreshToken
            {
                Id = Guid.NewGuid().ToString(),
                UserId = User.Id,
                Token = "Some JWT token here",
                Expires = DateTime.Now.AddDays(1),
            }
        };

        public void Delete(RefreshToken token)
        {
            RefreshTokens.Remove(token);
        }

        public async Task<IEnumerable<RefreshToken>> GetAsync(Expression<Func<RefreshToken, bool>> filter = null)
        {
            return await Task.FromResult(RefreshTokens);
        }

        public Task InsertAsync(RefreshToken refreshToken)
        {
            RefreshTokens.Add(refreshToken);
            return Task.CompletedTask;
        }

        public Task<bool> SaveChangesAsync() => Task.FromResult(true);
    }
}
