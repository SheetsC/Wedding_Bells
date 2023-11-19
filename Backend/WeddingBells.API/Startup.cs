using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using WeddingBells.API.Data_;


namespace WeddingBells.API
{
    public class Startup
    {
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }
        public IConfiguration Configuration{get;}

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING");
            services.AddDbContext<Data_.WeddingBellsContext>(options =>
                options.UseNpgsql(connectionString));
            


        }
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, WeddingBellsContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();
            
            var guestCount = context.Guests.Count();
            if (guestCount>0)
            {
                Console.WriteLine("Number of guests in the database: Greater than 0");
            } 
            else 
            {
                Console.WriteLine($"Number of guests in the database: {guestCount}");

            }



            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

