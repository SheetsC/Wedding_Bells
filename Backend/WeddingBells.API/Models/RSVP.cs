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

        public bool Attending{get;set;}
 
        public int GuestId {get; set;}

        public Guest Guest{get; set;}= null!;
        public int MealPrefId {get; set;}
        public MealPref MealPref{get; set;}= null!;

        public int EventId {get; set;}

        public Event Event{get; set;}= null!;

        public int HosterId{get; set;}

        public Hoster Hoster{get; set;}= null!;

    }
}