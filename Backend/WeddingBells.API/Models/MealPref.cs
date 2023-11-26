
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WeddingBells.API.Models
{
    [Table("MealPrefs")]
    public class MealPref
    {
        [Key]
        public int MealPrefId {get; set;}

        [RegularExpression 
        (
            RegexPatterns.NamePattern, 
            ErrorMessage = "Try again"
        )]
        public string CourseName {get; set;}= null!;

        public bool Vegitarian {get; set;}

        public bool Beef{get; set;}

        public bool Chicken{get; set;}

        public bool Fish {get; set;}

        public List<RSVP> RSVPs{get; set;}= null!;



    }
}
