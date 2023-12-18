using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingBells.API.Migrations
{
    /// <inheritdoc />
    public partial class EditTheModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RSVPs_Hosts_HosterId",
                table: "RSVPs");

            migrationBuilder.DropIndex(
                name: "IX_RSVPs_HosterId",
                table: "RSVPs");

            migrationBuilder.DropColumn(
                name: "HosterId",
                table: "RSVPs");

            migrationBuilder.DropColumn(
                name: "Attending",
                table: "Guests");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HosterId",
                table: "RSVPs",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Attending",
                table: "Guests",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_RSVPs_HosterId",
                table: "RSVPs",
                column: "HosterId");

            migrationBuilder.AddForeignKey(
                name: "FK_RSVPs_Hosts_HosterId",
                table: "RSVPs",
                column: "HosterId",
                principalTable: "Hosts",
                principalColumn: "HosterId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
