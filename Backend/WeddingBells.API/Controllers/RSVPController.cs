using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.Models;

namespace WeddingBells.API.Controllers;
[ApiController]
[Route("[controller]")]
public class RSVPController : ControllerBase
{
    private readonly WeddingBellsContext _context;
    public RSVPController(WeddingBellsContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> MakeRSVP([FromBody] RSVP newRSVP)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var guestMatch = await _context.RSVPs
                                .FirstOrDefaultAsync(r => r.Guest.EmailAddress == newRSVP.Guest.EmailAddress);

            if (guestMatch != null)
            {
                return StatusCode(409, new { Message = "RSVP already exists. Contact Hoster for assistance." });
            }

            await _context.RSVPs.AddAsync(newRSVP);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRSVP), new { rsvp_id = newRSVP.RSVP_ID }, newRSVP);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred while processing your request." });
        }
    }

    [HttpGet("{rsvp_id}")]
    public async Task<IActionResult> GetRSVP(int rsvp_id)
    {
        try
        {
            var rsvp = await _context.RSVPs.FindAsync(rsvp_id);

            if (rsvp == null)
            {
                return NotFound(new { Message = "RSVP not found." });
            }

            return Ok(rsvp);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred while processing your request."});
        }
    }
}

