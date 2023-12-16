using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Data_;
using WeddingBells.API.Models;

namespace Weddingbells.APi.Controllers;
[ApiController]
[Route("[controller]")]
public class MealPrefController : ControllerBase
{
    public readonly WeddingBellsContext _context;
    public MealPrefController (WeddingBellsContext context)
    {
        _context = context;
    }
    [HttpPost]
    public async Task<IActionResult> MakeMeal([FromBody] MealPref mealPref)
    {
        if(!ModelState.IsValid) 
        {
            return BadRequest();
        }
        try
        {
            var oldMeal = await _context.MealPrefs.FirstOrDefaultAsync(m => m.MealPrefId == mealPref.MealPrefId);
            if (oldMeal != null)
            {
                return StatusCode(409, new { Message = "Meal Pref already exists. Delete or change old one." });
            }
            else if(mealPref==null)
            {
                return StatusCode(409, new{Message = "Input not recongnized"});
            }
            await _context.MealPrefs.AddAsync(mealPref);
            await _context.SaveChangesAsync();
            return Ok(new{ mealPref.MealPrefId, mealPref });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return StatusCode(500, new { Message = "An error occurred while processing your request." });
        }
    }
}