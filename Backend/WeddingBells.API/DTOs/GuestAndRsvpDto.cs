
namespace WeddingBells.API.DTOs;

public class GuestAndRsvpDto
{   //Guest info
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string PhoneNumber { get; set; } = null!;
    public string EmailAddress { get; set; } = null!;
    


    // RSVP info
    public int EventId { get; set; }
    public bool Attending{get;set;}
    public int GuestId {get; set;}
    public int MealPrefId {get; set;}
    public bool AddPlusOne { get; set; }


}