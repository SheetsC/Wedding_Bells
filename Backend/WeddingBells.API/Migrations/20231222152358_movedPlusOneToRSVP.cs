using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingBells.API.Migrations
{
    /// <inheritdoc />
    public partial class movedPlusOneToRSVP : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddPlusOne",
                table: "Guests");

            migrationBuilder.AddColumn<bool>(
                name: "AddPlusOne",
                table: "RSVPs",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddPlusOne",
                table: "RSVPs");

            migrationBuilder.AddColumn<bool>(
                name: "AddPlusOne",
                table: "Guests",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
