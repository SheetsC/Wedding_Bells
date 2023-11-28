using Microsoft.AspNetCore.Mvc;
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
        _context.Hosts.Add(hoster);
        await _context.SaveChangesAsync();

        return Ok(new{message="success signup"});
    }
}