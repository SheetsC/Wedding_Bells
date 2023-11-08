//This use of "Host" is refering to a person that throws a gathering.


using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using BCrypt.Net;

namespace WeddingBells.API.Models

{
    [Table("Hosts")]
    public class Host
    {
        [Key]
        public int HostId{get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public required string FirstName{get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public required string LastName{get; set;}


        [RegularExpression(RegexPatterns.PhoneNumberPattern, ErrorMessage = "Invalid Phone Number")]
        public required string PhoneNumber {get; set;}


        [RegularExpression(RegexPatterns.EmailPattern, ErrorMessage = "Invalid Email Address")]
        public required string EmailAddress {get; set;}


        private string _password = string.Empty;

        [RegularExpression(RegexPatterns.PasswordPattern, ErrorMessage = "Needs 8 character w/ one Upper and one number")]
        public required string Password
        {
            get { return _password; }
            set { _password = BCrypt.Net.BCrypt.HashPassword(value);}
        }
        public  required List<Event> Events{get; set;}
    }
}