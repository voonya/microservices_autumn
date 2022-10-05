using ECampus.Services.Auth.Models;
using System.Linq.Expressions;

namespace ECampus.Services.Auth.Data.Repositories
{
    public interface IMockRepostiory
    {
        Task<IEnumerable<RefreshToken>> GetAsync(Expression<Func<RefreshToken, bool>> filter = null);
        Task InsertAsync(RefreshToken refreshToken);
        void Delete(RefreshToken token);
        Task<bool> SaveChangesAsync();
    }
}
