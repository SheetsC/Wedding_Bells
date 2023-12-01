using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.Models;
using BCrypt.Net;

namespace WeddingBells.API.controllers;
[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    public readonly WeddingBellsContext _context;

    public LoginController(WeddingBellsContext context)
    {
        _context = context;
    }
    [HttpPost]
    public async Task<IActionResult> Login([FromBody]LoginModel loginModel )
    {
        var responseMatch = await _context.Hosts.FirstOrDefaultAsync(u => u.EmailAddress==loginModel.EmailAddress);
        if (responseMatch == null && loginModel.EmailAddress != responseMatch?.EmailAddress)
        {
            return Unauthorized(new{message = "No assosicated Email"});
        }
        else if (responseMatch != null && BCrypt.Net.BCrypt.Verify(loginModel.Password, responseMatch.Password))
        {
            responseMatch.LoggedIn = true;
            await _context.SaveChangesAsync();
            return Ok(new {message = "Login Successful"});
        }
        else 
        {
            return Unauthorized(new{message = "Invalid Password"});
        }
    }   
}
