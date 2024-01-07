using Microsoft.EntityFrameworkCore;

namespace SuperHero.Api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();

        public DataContext(DbContextOptions options) : base(options)
        { }
    }
}
