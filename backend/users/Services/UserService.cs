using Microsoft.EntityFrameworkCore;
using users.Db;
using users.Models;

namespace users.Services;

public class UserService
{

    public UserService()
    {
    }

    public async Task<List<UserModel>> GetAllAsync()
    {
        using var dbContext = new ApplicationDbContext();
        var users = await dbContext.Users.ToListAsync();

        return new List<UserModel>((IEnumerable<UserModel>)users);

    }

    public async Task<UserModel?> GetAsync(int id)
    {
        using var dbContext = new ApplicationDbContext();
        return await dbContext.Users.SingleAsync(user => user.Id == id);
    }

    public async Task CreateAsync(UserModel newUser)
    {
        using var dbContext = new ApplicationDbContext();
        UserModel result = new()
        {
            Name = newUser.Name,
            Email = newUser.Email
        };
        await dbContext.Users.AddAsync(result);
        await dbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(int id, UserModel updatedUser)
    {
        using var dbContext = new ApplicationDbContext();

        var user = await dbContext.Users.Where(user => user.Id == id).FirstOrDefaultAsync();
        if (user != null)
        {
            user = new UserModel
            {
                Id = user.Id,
                Name = updatedUser.Name,
                Email = updatedUser.Email
            };
            await dbContext.SaveChangesAsync();
        }
    }

    public async Task RemoveAsync(int id)
    {
        using var dbContext = new ApplicationDbContext();

        var user = await dbContext.Users.Where(user => user.Id == id).FirstAsync();
        dbContext.Users.Remove(user);
        await dbContext.SaveChangesAsync();
    }
}