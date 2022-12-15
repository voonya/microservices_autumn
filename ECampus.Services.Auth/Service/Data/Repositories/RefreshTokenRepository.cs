using System.Linq.Expressions;
using ECampus.Services.Auth.Models;
using Microsoft.EntityFrameworkCore;

namespace ECampus.Services.Auth.Data.Repositories
{
    public class RefreshTokenRepository : IRefreshTokenRepository
    {
        private readonly ECampusDbContext _context;
        private readonly DbSet<RefreshToken> _dbSet;

        public RefreshTokenRepository(ECampusDbContext context)
        {
            _context = context;
            _dbSet = context.Set<RefreshToken>();
        }

        public async Task<IEnumerable<RefreshToken>> GetAsync(Expression<Func<RefreshToken, bool>> filter = null, Func<IQueryable<RefreshToken>, IOrderedQueryable<RefreshToken>> orderBy = null, string includeProperties = "")
        {
            IQueryable<RefreshToken> query = _dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                         (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return await orderBy(query).ToListAsync();
            }

            return await query.ToListAsync();
        }

        public async Task<RefreshToken> GetByIdAsync<T>(T id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<RefreshToken> InsertAsync(RefreshToken entity)
        {
            var result = await _dbSet.AddAsync(entity);

            return result.Entity;
        }

        public async Task<RefreshToken> DeleteAsync<T>(T id)
        {
            RefreshToken entityToDelete = await GetByIdAsync(id);
            if (entityToDelete is null)
                return default;

            return Delete(entityToDelete);
        }

        public RefreshToken Delete(RefreshToken entityToDelete)
        {
            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                _dbSet.Attach(entityToDelete);
            }

            return _dbSet.Remove(entityToDelete).Entity;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
