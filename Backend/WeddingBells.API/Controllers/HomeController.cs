using Microsoft.AspNetCore.Mvc;
using WeddingBells.API.Data_;
using System.Linq;
using Microsoft.EntityFrameworkCore;

//utilize depencecy injections for decoupling 

namespace WeddingBells.API.Controllers;

[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    public readonly WeddingBellsContext _context;
    public HomeController(WeddingBellsContext context)
    {
        _context = context;
    }

    
    [HttpGet]
    public async Task<IActionResult> GetGuestCount()
    {
        try
        {
            var guestCount = await _context.Guests.CountAsync();
            return Ok($"Total Guests: {guestCount}");
        }
        catch (Exception ex)
        {
            // Log the exception details
            // You can use a logging framework like NLog, Serilog, etc.
            // For simplicity, I'm using Console.WriteLine here
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, "An error occurred while processing your request.");
        }

        
    }
   
        
}


