// model creation for collecting specified data from response body 
// and use it to find a match in Hosts table

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WeddingBells.API.Models;

public class LoginModel
{
    public string EmailAddress {get;set;} = null!;

    public string Password {get; set;} = null!;

}