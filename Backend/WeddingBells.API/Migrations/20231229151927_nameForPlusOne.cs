using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingBells.API.Migrations
{
    /// <inheritdoc />
    public partial class nameForPlusOne : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PlusOneName",
                table: "RSVPs",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlusOneName",
                table: "RSVPs");
        }
    }
}
