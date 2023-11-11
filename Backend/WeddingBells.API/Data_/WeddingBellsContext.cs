using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WeddingBells.API.Models;

namespace WeddingBells.API.Data_
{
    public class WeddingBells : DbContext
    {
        public DbSet<Guest> Guests { get; set; }
        public DbSet<MealPref> MealPrefs { get; set; }
        public DbSet<RSVP> RSVPs { get; set; }
        public DbSet<Hoster> Hosts { get; set; }
        public DbSet<Event> Events { get; set; }

        public WeddingBells(DbContextOptions<WeddingBells> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hoster>()
                .HasMany(h => h.Events)
                .WithOne(e => e.Hoster)
                .HasForeignKey(e => e.HosterId);
            
            modelBuilder.Entity<Event>()
                .HasMany(e => e.RSVPs)
                .WithOne(r => r.Event)
                .HasForeignKey(r => r.EventId);

            modelBuilder.Entity<Guest>()
                .HasMany(g => g.RSVPs)
                .WithOne(r => r.Guest)
                .HasForeignKey(r => r.GuestId);

            modelBuilder.Entity<MealPref>()
                .HasMany(m => m.RSVPs)
                .WithOne(r => r.MealPref)
                .HasForeignKey(r => r.MealPrefId);
            
        }
    }
}