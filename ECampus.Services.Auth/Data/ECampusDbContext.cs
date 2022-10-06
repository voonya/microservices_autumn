using ECampus.Services.Auth.Models;
using Microsoft.EntityFrameworkCore;

namespace ECampus.Services.Auth.Data
{
    public class ECampusDbContext : DbContext
    {
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public DbSet<User> Users { get; set; }

        public ECampusDbContext(DbContextOptions<ECampusDbContext> options) : base(options)
        {
        }
    }
}
