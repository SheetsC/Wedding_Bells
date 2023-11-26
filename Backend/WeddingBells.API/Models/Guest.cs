//this code is the shcema file for the Backend of WeddingBells
//it utilizes reflection for validations

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace WeddingBells.API.Models
{
    [Table("Guests")]
    public class Guest
    {
        public int GuestId {get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public string FirstName {get; set;}= null!;


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public string LastName {get; set;}= null!;


        [RegularExpression(RegexPatterns.PhoneNumberPattern, ErrorMessage = "Invalid Phone Number")]
        public string[] PhoneNumber {get; set;}= null!;



        [RegularExpression(RegexPatterns.EmailPattern, ErrorMessage = "Invalid Email Address")]
        public string EmailAddress {get; set;}= null!;


        public bool Attending {get; set;}


        public bool AddPlusOne {get; set;}


        public List<RSVP> RSVPs {get; set;}= null!;


    }   
}


