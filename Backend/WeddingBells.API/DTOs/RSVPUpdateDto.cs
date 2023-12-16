namespace WeddingBells.API.DTOs;
public class RSVPUpdateDto
{
    public int MealPrefId { get; set; }
    public int EventId { get; set; }

    public bool Attending{get;set;}
    // You can add other properties if needed
}