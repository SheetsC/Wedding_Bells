using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace WeddingBells.API.Models
{
    [Table("Events")]
    public class Event
    {
        [Key]
        public int EventId{get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Cannot contain special characters")]

        public string Title{get; set;} = null!;

        public string Location{get; set;}= null!;

        public string Date{get; set;} = null!; 

        public string Description{get;set;} = null!;
        public int HosterId{get;set;}
        
        [JsonIgnore]
        public Hoster? Hoster{get; set;}

        public  List<RSVP>? RSVPs{get; set;}
    }
}