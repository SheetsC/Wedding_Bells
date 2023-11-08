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

        public required Guest Guest{get; set;}
        public int MealPrefId {get; set;}
        public required MealPref MealPref{get; set;}

        public required int EventId {get; set;}

        public required Event Event{get; set;}

        public required int HostId{get; set;}

        public required Host Host{get; set;}


        // public static implicit operator RSVP(bool n)
        // {
        //     throw new NotImplementedException();
        // }
    }
}