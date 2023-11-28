//This use of "Host" is refering to a person that throws a gathering.


using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using BCrypt.Net;

namespace WeddingBells.API.Models

{
    [Table("Hosts")]
    public class Hoster
    {
        [Key]
        public int HosterId{get; set;}


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public string FirstName{get; set;}= null!;


        [RegularExpression(RegexPatterns.NamePattern, ErrorMessage = "Try again")]
        public string LastName{get; set;}= null!;


        [RegularExpression(RegexPatterns.PhoneNumberPattern, ErrorMessage = "Invalid Phone Number")]
        public string PhoneNumber {get; set;}= null!;


        [RegularExpression(RegexPatterns.EmailPattern, ErrorMessage = "Invalid Email Address")]
        public string EmailAddress {get; set;}= null!;


        private string _password = string.Empty;

        [RegularExpression(RegexPatterns.PasswordPattern, ErrorMessage = "Needs 8 character w/ one Upper and one number")]
        public string Password
        {
            get { return _password; }
            set { _password = BCrypt.Net.BCrypt.HashPassword(value);}
        }
        public  List<Event>? Events {get; set;}
    }
}