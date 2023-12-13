using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.IdentityModel.Tokens;
using WeddingBells.API.Data_;

var builder = WebApplication.CreateBuilder(args);
var tokenPass = Environment.GetEnvironmentVariable("tokenPass")
    ?? throw new InvalidOperationException("JWT token password not found in environment variables");



builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenPass)),
        };
    });

builder.Services.AddControllers();
var connectionString = Environment.GetEnvironmentVariable("wbDB");
//var connectionString = builder.Configuration.GetConnectionString("wbDB");
builder.Services.AddDbContext<WeddingBellsContext>(options =>
    options.UseNpgsql(connectionString));
    
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("https://weddingbells-api.onrender.com", "http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddSwaggerGen();

builder.WebHost.UseUrls("http://*:5021");

var app = builder.Build();
//ui for testing endpoints
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("AllowSpecificOrigin");


app.Run();
