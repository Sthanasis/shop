using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using users.Db;

namespace users.Services;

public class UserService
{

    public UserService()
    {
    }

    public async Task<List<IdentityUser>> GetAllAsync()
    {
        using var dbContext = new ApplicationDbContext(new DbContextOptions<ApplicationDbContext> { });
        var users = await dbContext.Users.ToListAsync();

        return new List<IdentityUser>(users);

    }

    public async Task<IdentityUser?> GetAsync(string id)
    {
        using var dbContext = new ApplicationDbContext(new DbContextOptions<ApplicationDbContext> { });
        return await dbContext.Users.SingleAsync(user => user.Id == id);
    }

    public async Task RemoveAsync(string id)
    {
        using var dbContext = new ApplicationDbContext(new DbContextOptions<ApplicationDbContext> { });

        var user = await dbContext.Users.Where(user => user.Id == id).FirstAsync();
        dbContext.Users.Remove(user);
        await dbContext.SaveChangesAsync();
    }

    public async Task<bool> EmailExistsAsync(string email)
    {
        using var dbContext = new ApplicationDbContext(new DbContextOptions<ApplicationDbContext> { });
        return await dbContext.Users.AnyAsync(user => user.Email!.ToLower() == email.ToLower());
    }

    public async Task<bool> UsernameExistsAsync(string username)
    {
        using var dbContext = new ApplicationDbContext(new DbContextOptions<ApplicationDbContext> { });
        return await dbContext.Users.AnyAsync(user => user.UserName!.ToLower() == username.ToLower());
    }
}