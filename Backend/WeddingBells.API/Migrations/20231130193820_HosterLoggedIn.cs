using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingBells.API.Migrations
{
    /// <inheritdoc />
    public partial class HosterLoggedIn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "LoggedIn",
                table: "Hosts",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LoggedIn",
                table: "Hosts");
        }
    }
}
