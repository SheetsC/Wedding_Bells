using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace WeddingBells.API.Models
{
    [Table("RSVPs")]
    public class RSVP
{
    [Key]
    public int RSVP_ID { get; set; }
    public bool Attending { get; set; }
    public int GuestId { get; set; }
    public required Guest Guest { get; set; }
    public required List<MealPref> MealPrefs { get; set; } // Many-to-many relationship with MealPref
    public required int EventId { get; set; }
    public required Event Event { get; set; }
}

}