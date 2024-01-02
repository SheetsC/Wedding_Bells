

using Microsoft.AspNetCore.Mvc;
using WeddingBells.API.Data_;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WeddinBells.API.Controller;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    private readonly WeddingBellsContext _context;

    public EventController(WeddingBellsContext context) 
    {
        _context = context; 
    }

    [HttpGet("{eventId}")]
    public async Task<IActionResult> ShowEventInfo([FromRoute]int eventId)
    {
        try 
        {
            var myEvent = await _context.Events
                .Where(e => e.EventId == eventId)
                .Select(e => new { e.EventId, e.Title, e.Date, e.Description, e.Location })
                .FirstOrDefaultAsync();

            if(myEvent == null)
            {
                return NotFound(new { message = "Event not found" });
            }
            else 
            {
                return Ok(myEvent);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, "A codebase error occurred while processing.");
        }
    }
}