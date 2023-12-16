using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.Models;

namespace WeddingBells.API.Controllers;
[ApiController]
[Route("[controller]")]
public class SignupController : ControllerBase
{
    public readonly WeddingBellsContext _context;

    public SignupController(WeddingBellsContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> SignUp([FromBody] Hoster hoster)
    {

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        try
        {
            var emailMatch = await _context.Hosts.FirstOrDefaultAsync(h => h.EmailAddress == hoster.EmailAddress);
            if(emailMatch != null)
            {
                return StatusCode(409, new { Message = "Email already in use." });

            }
            await _context.Hosts.AddAsync(hoster);
            await _context.SaveChangesAsync();
            return Ok(new{message="success signup"});
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred while processing your request." });
        }
    }
}