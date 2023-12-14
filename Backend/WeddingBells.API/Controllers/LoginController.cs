
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.Models;
using BCrypt.Net;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace WeddingBells.API.Controllers;
[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    private readonly WeddingBellsContext _context;

    public LoginController(WeddingBellsContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody]LoginModel loginModel)
    {
        var responseMatch = await _context.Hosts.FirstOrDefaultAsync(h => h.EmailAddress == loginModel.EmailAddress);
        if (responseMatch == null)
        {
            return Unauthorized(new { message = "No associated Email" });
        }
        else if (BCrypt.Net.BCrypt.Verify(loginModel.Password, responseMatch.Password))
        {
            var token = GenerateJwtToken(responseMatch.HosterId.ToString());
            return Ok(new { message = "Login Successful", token });
        }
        else
        {
            return Unauthorized(new { message = "Invalid Password" });
        }
    }

    private static string GenerateJwtToken(string hosterId)
    {
        var tokenPass = Environment.GetEnvironmentVariable("tokenPass") 
            ?? throw new InvalidOperationException("JWT token password not found in environment variables");
        var issuer = Environment.GetEnvironmentVariable("tokenIssuer")
            ?? throw new InvalidOperationException("JWT issuer not found in environment variables");
        var audience = Environment.GetEnvironmentVariable("tokenAud")
            ?? throw new InvalidOperationException("JWT audience not found in environment variables");

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenPass));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, hosterId),
            // Add other claims as needed
        };

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
