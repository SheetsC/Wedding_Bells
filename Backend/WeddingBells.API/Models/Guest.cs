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
        public required int GuestId {get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public required string FirstName {get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public required string LastName {get; set;}


        [RegularExpression(RegexPatterns.PhoneNumberPattern, ErrorMessage = "Invalid Phone Number")]
        public required string[] PhoneNumber {get; set;}



        [RegularExpression(RegexPatterns.EmailPattern, ErrorMessage = "Invalid Email Address")]
        public required string EmailAddress {get; set;}


        public required bool Attending {get; set;}


        public required bool AddPlusOne {get; set;}


        public required List<RSVP> RSVPs {get; set;}


    }   
}

