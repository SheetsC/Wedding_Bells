
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WeddingBells.API.Models
{
    public class MealPref
    {
        public int MealPrefId {get; set;}

        [RegularExpression 
        (
            RegexPatterns.NamePattern, 
            ErrorMessage = "Try again"
        )]
        public required string CourseName {get; set;}

        public required List<RSVP> RSVPs{get; set;}



    }
}
