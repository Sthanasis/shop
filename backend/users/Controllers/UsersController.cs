using Microsoft.AspNetCore.Mvc;
using users.Services;
using connect_utilities.Models;
using connect_utilities.Utilities;
using Microsoft.AspNetCore.Identity;
using Google.Protobuf.WellKnownTypes;

namespace users.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    public UsersController(UserService userService, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
    {
        _userService = userService;
        _userManager = userManager;
        _signInManager = signInManager;
    }


    private readonly AppErrorUtility appError = new();
    [HttpGet]
    public async Task<ActionResult<AppResult<List<IdentityUser>>>> Get()
    {
        try
        {
            var users = await _userService.GetAllAsync();
            var result = new AppResult<List<IdentityUser>> { Data = users };
            return Ok(result);
        }
        catch (Exception e)
        {
            return appError.SendServerError(e.Message);
        }
    }

    [HttpPost("register")]
    public async Task<ActionResult<AppResult>> Register([FromBody] RegisterModel request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return appError.SendBadRequestError("Model is invalid");
            }

            var user = new IdentityUser
            {
                UserName = request.UserName,
                Email = request.Email
            };
            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                var appResult = new AppResult<NullValue> { Data = new NullValue() };
                return Ok(appResult);
            }

            return appError.SendBadRequestError(result.Errors.ToString()!);

        }
        catch (Exception e)
        {
            return appError.SendServerError(e.Message);

        }
    }
    [HttpPost("login")]
    public async Task<ActionResult<AppResult>> Login([FromBody] LoginModel request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _userManager.FindByNameAsync(request.UserNameOrEmail)
                   ?? await _userManager.FindByEmailAsync(request.UserNameOrEmail);

        if (user == null)
        {
            return Unauthorized(new { Message = "Invalid username/email or password" });
        }
        var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, lockoutOnFailure: false);

        if (result.Succeeded)
        {
            var token = new JwtUtility().GenerateJwtToken(user);
            var appResult = new AppResult<string> { Data = token };
            return Ok(appResult);
        }
        return Unauthorized(new { Message = "Invalid username/email or password" });
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            await _userService.RemoveAsync(id);
            return NoContent();
        }
        catch (Exception e)
        {
            return appError.SendServerError(e.Message);

        }
    }
}