

namespace WeddingBells.API.Models
{
    public static class RegexPatterns
    {
        public const string PhoneNumberPattern = @"^\(?([0-9]{3})\)?[- . ]?([0-9]{3})[-. ]?([0-9]{4})$";
        public const string EmailPattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

        public const string NamePattern= @"^[a-zA-z ]{1,10}$";

        public const string PasswordPattern = @"^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$";

        //public const string LocationPattern = @"^[a-zA-Z{1,4}]$";



    }
}