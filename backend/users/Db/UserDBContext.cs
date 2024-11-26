using Microsoft.EntityFrameworkCore;
using users.Models;
namespace users.Db;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext()
    {
    }
    public DbSet<UserModel> Users { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
        optionsBuilder.UseMySQL(configuration.GetConnectionString("DefaultConnection")!);
    }
}
