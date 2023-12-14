

using Microsoft.AspNetCore.Mvc;
using WeddingBells.API.Data_;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WeddinBells.API.Controller;

[ApiController]
[Route("[controller]/{EventId}")]
public class EventController : ControllerBase
{
    public readonly WeddingBellsContext _context;
    public EventController(WeddingBellsContext context) 
    {
        _context = context; 
    }

    [HttpGet("{eventId}")]

    public async Task<IActionResult> ShowEventInfo([FromRoute]int eventId)
    {
        try 
        {
            var MyEvent = await _context.Events.FirstOrDefaultAsync(e => e.EventId == eventId);
            if(MyEvent == null)
            {
                return Unauthorized(new { message = "Cannot connect to Events" });

            }
            else 
            {
                return Ok(new { message = MyEvent?.Title,  MyEvent});
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, "A codebase error occurred while processing.");
        }
    }
}