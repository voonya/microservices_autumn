using ECampus.Services.Auth.Models;
using Microsoft.EntityFrameworkCore;

namespace ECampus.Services.Auth.Data
{
    public class ECampusDbContext : DbContext
    {
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public ECampusDbContext(DbContextOptions<ECampusDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("userdb");
            base.OnModelCreating(modelBuilder);
        }
    }
}
