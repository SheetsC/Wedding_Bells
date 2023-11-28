using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


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

        public int HosterId{get;set;}

        public Hoster Hoster{get; set;}= null!;

        public  List<RSVP>? RSVPs{get; set;}

    }
}