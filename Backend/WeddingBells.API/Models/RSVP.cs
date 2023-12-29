using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Text.Json.Serialization;

namespace WeddingBells.API.Models
{
    [Table("RSVPs")]
    public class RSVP
    {
        [Key]
        public int RSVP_ID { get; set; }

        public bool Attending{get;set;}
        public int GuestId {get; set;}

        [JsonIgnore]
        public Guest? Guest{get; set;}
        public int MealPrefId {get; set;}

        [JsonIgnore]
        public MealPref? MealPref{get; set;}
        public int EventId {get; set;}

        [JsonIgnore]
        public Event? Event{get; set;}

        public bool AddPlusOne {get; set;}

        public string? PlusOneName {get; set;}

    }
}