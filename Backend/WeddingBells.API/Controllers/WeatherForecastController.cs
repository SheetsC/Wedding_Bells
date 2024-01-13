using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using WeddingBells.API.Data_;

namespace WeddingBells.API.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    public readonly WeddingBellsContext _context;
    public WeatherForecastController (WeddingBellsContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> PingDatabase()
{
    try
    {
        
        var canConnect = await _context.Database.CanConnectAsync();

        if (canConnect)
        {
            return Ok( new {Message = "Database connection successful."});
        }
        else
        {
            return StatusCode(500, "Unable to connect to the database.");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"An error occurred during database ping: {ex.Message}");
        return StatusCode(500, "Error pinging the database.");
    }
}
}
