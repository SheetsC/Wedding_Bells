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

        public required string Title{get; set;}


        public required string Location{get; set;}

        public required int HosterId{get;set;}

        public required Hoster Hoster{get; set;}

        public required List<RSVP> RSVPs{get; set;}

    }
}