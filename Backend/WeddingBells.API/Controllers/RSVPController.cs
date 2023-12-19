using System.Transactions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.DTOs;
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
    [HttpGet("ForEvent/{eventId}")]
    public async Task<IActionResult> GetRSVPsForEvent(int eventId)
    {
        try 
        {
            var rsvps = await _context.RSVPs
                                    .Where(rsvp => rsvp.EventId == eventId)
                                    .ToListAsync();
            return Ok(rsvps);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }
    [HttpGet("{rsvp_id}")]
    public async Task<IActionResult> GetRSVP(int rsvp_id)
    {
        try
        {
            var rsvp = await _context.RSVPs.FirstOrDefaultAsync(r => r.RSVP_ID == rsvp_id);

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

    [HttpPost]
    public async Task<IActionResult> MakeRSVP([FromBody] GuestAndRsvpDto newGuestAndRsvp)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        using var transaction = await _context.Database.BeginTransactionAsync();
        try
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            var guestRsvpMatch = await _context.RSVPs
                                .FirstOrDefaultAsync(r => r.Guest.EmailAddress == newGuestAndRsvp.EmailAddress
                                && r.EventId == newGuestAndRsvp.EventId);
#pragma warning restore CS8602 // Dereference of a possibly null reference.

            if (guestRsvpMatch != null)
            {
                return StatusCode(409, new { Message = "RSVP already exists. Contact Hoster for assistance." });
            }
            var newGuest = new Guest
            {
                FirstName = newGuestAndRsvp.FirstName,
                LastName = newGuestAndRsvp.LastName,
                EmailAddress = newGuestAndRsvp.EmailAddress,
                PhoneNumber = newGuestAndRsvp.PhoneNumber,
                AddPlusOne = newGuestAndRsvp.AddPlusOne

            };
            await _context.Guests.AddAsync(newGuest);
            await _context.SaveChangesAsync();

            var newRSVP = new RSVP
            {
                EventId = newGuestAndRsvp.EventId,
                Attending = newGuestAndRsvp.Attending,
                GuestId = newGuest.GuestId,
                MealPrefId = newGuestAndRsvp.MealPrefId
            };
            await _context.RSVPs.AddAsync(newRSVP);
            await _context.SaveChangesAsync();

            await transaction.CommitAsync();

            return CreatedAtAction(nameof(GetRSVP), new { rsvp_id = newRSVP.RSVP_ID }, newRSVP);
            //return StatusCode(202, new{Message = "Success", newRSVP});
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred while processing your request." });
        }


    }

    [HttpPatch("{rsvp_id}")]
    public async Task<IActionResult> EditRSVP (int rsvp_id, [FromBody]RSVPUpdateDto rsvpUpdateDto)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest();
        }
        try
        {
            var rsvp = await _context.RSVPs.FirstOrDefaultAsync(r => r.RSVP_ID == rsvp_id);
            if (rsvp == null)
            {
                return NotFound(new { Message = "RSVP not found." });
            }
            rsvp.MealPrefId = rsvpUpdateDto.MealPrefId;
            rsvp.EventId = rsvpUpdateDto.EventId;
            rsvp.Attending = rsvpUpdateDto.Attending;

            _context.RSVPs.Update(rsvp);
            await _context.SaveChangesAsync();

            return Ok(new{Message="update complete", rsvp});
            
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An Error occured accessing RSVPs: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred accessing RSVPs."});

        }
    }
    [HttpDelete("{rsvp_id}")]
    public async Task<IActionResult> DeleteRSVP(int rsvp_id)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        try
        {
            var rsvp = await _context.RSVPs.FirstOrDefaultAsync(r => r.RSVP_ID == rsvp_id);

            if (rsvp == null)
            {
                return NotFound(new { Message = "Trouble accessing the RSVP." });
            }

            _context.RSVPs.Remove(rsvp);
            await _context.SaveChangesAsync();
            return Ok(new {Message = "RSVP deleted successfully.", rsvp});

        }
        catch (Exception ex)
        {

            Console.WriteLine(ex.Message);
            return StatusCode(500, new { Message = "An error occurred accessing RSVPs."});

        }
    }
}

