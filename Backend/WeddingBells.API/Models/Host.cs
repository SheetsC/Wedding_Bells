using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WeddingBells.API.Models

{
    public class Host
    {
        public required int HostId{get; set;}

        public  required List<Event> Events{get; set;}
    }
}