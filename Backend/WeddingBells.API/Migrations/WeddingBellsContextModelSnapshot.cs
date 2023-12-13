﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WeddingBells.API.Data_;

#nullable disable

namespace WeddingBells.API.Migrations
{
    [DbContext(typeof(WeddingBellsContext))]
    partial class WeddingBellsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("WeddingBells.API.Models.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("EventId"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("HosterId")
                        .HasColumnType("integer");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("EventId");

                    b.HasIndex("HosterId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Guest", b =>
                {
                    b.Property<int>("GuestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("GuestId"));

                    b.Property<bool>("AddPlusOne")
                        .HasColumnType("boolean");

                    b.Property<bool>("Attending")
                        .HasColumnType("boolean");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string[]>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.HasKey("GuestId");

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Hoster", b =>
                {
                    b.Property<int>("HosterId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("HosterId"));

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("LoggedIn")
                        .HasColumnType("boolean");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("HosterId");

                    b.ToTable("Hosts");
                });

            modelBuilder.Entity("WeddingBells.API.Models.MealPref", b =>
                {
                    b.Property<int>("MealPrefId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("MealPrefId"));

                    b.Property<bool>("Beef")
                        .HasColumnType("boolean");

                    b.Property<bool>("Chicken")
                        .HasColumnType("boolean");

                    b.Property<string>("CourseName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("Fish")
                        .HasColumnType("boolean");

                    b.Property<bool>("Vegitarian")
                        .HasColumnType("boolean");

                    b.HasKey("MealPrefId");

                    b.ToTable("MealPrefs");
                });

            modelBuilder.Entity("WeddingBells.API.Models.RSVP", b =>
                {
                    b.Property<int>("RSVP_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("RSVP_ID"));

                    b.Property<bool>("Attending")
                        .HasColumnType("boolean");

                    b.Property<int>("EventId")
                        .HasColumnType("integer");

                    b.Property<int>("GuestId")
                        .HasColumnType("integer");

                    b.Property<int>("HosterId")
                        .HasColumnType("integer");

                    b.Property<int>("MealPrefId")
                        .HasColumnType("integer");

                    b.HasKey("RSVP_ID");

                    b.HasIndex("EventId");

                    b.HasIndex("GuestId");

                    b.HasIndex("HosterId");

                    b.HasIndex("MealPrefId");

                    b.ToTable("RSVPs");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Event", b =>
                {
                    b.HasOne("WeddingBells.API.Models.Hoster", "Hoster")
                        .WithMany("Events")
                        .HasForeignKey("HosterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Hoster");
                });

            modelBuilder.Entity("WeddingBells.API.Models.RSVP", b =>
                {
                    b.HasOne("WeddingBells.API.Models.Event", "Event")
                        .WithMany("RSVPs")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WeddingBells.API.Models.Guest", "Guest")
                        .WithMany("RSVPs")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WeddingBells.API.Models.Hoster", "Hoster")
                        .WithMany()
                        .HasForeignKey("HosterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WeddingBells.API.Models.MealPref", "MealPref")
                        .WithMany("RSVPs")
                        .HasForeignKey("MealPrefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Event");

                    b.Navigation("Guest");

                    b.Navigation("Hoster");

                    b.Navigation("MealPref");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Event", b =>
                {
                    b.Navigation("RSVPs");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Guest", b =>
                {
                    b.Navigation("RSVPs");
                });

            modelBuilder.Entity("WeddingBells.API.Models.Hoster", b =>
                {
                    b.Navigation("Events");
                });

            modelBuilder.Entity("WeddingBells.API.Models.MealPref", b =>
                {
                    b.Navigation("RSVPs");
                });
#pragma warning restore 612, 618
        }
    }
}
