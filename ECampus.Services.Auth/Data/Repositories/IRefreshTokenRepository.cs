using ECampus.Services.Auth.Models;
using System.Linq.Expressions;

namespace ECampus.Services.Auth.Data.Repositories
{
    public interface IRefreshTokenRepository
    {
        Task<IEnumerable<RefreshToken>> GetAsync(
            Expression<Func<RefreshToken, bool>> filter = null,
            Func<IQueryable<RefreshToken>, IOrderedQueryable<RefreshToken>> orderBy = null,
            string includeProperties = "");

        Task<RefreshToken> GetByIdAsync<T>(T id);

        Task<RefreshToken> InsertAsync(RefreshToken entity);

        Task<RefreshToken> DeleteAsync<T>(T id);

        RefreshToken Delete(RefreshToken entityToDelete);

        Task<bool> SaveChangesAsync();
    }
}
