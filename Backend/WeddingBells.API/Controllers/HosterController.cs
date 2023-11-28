using Microsoft.AspNetCore.Mvc;
using WeddingBells.API.Data_;
using System.Linq;

//utilize depencecy injections for decoupling 

namespace WeddingBells.API.Controllers;

[ApiController]
[Route("[controller]")]
public class HosterController : ControllerBase
{
    public readonly WeddingBellsContext _context;
    public HosterController(WeddingBellsContext context)
    {
        _context = context;
    }

    
    [HttpGet]
    public IActionResult GetHostCount()
    {
        try
        {
            var hosterCount = _context.Hosts.Count();
            return Ok(($"Total Hosts: {hosterCount}"));
        }
        catch (Exception ex)
        {
            // For simplicity, I'm using Console.WriteLine here
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }
 

   
        
}
