using EmployeeApp.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace EmployeeApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        { Configuration = configuration; }

        public IConfiguration Configuration { get; }


        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<ApplicationDbContext>(options => options
                    .UseSqlServer(Configuration
                        .GetConnectionString("AppConnectionString")));
            services.AddCors(c => c.AddPolicy("cors", opt => opt.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
            services.AddControllers().SetCompatibilityVersion(CompatibilityVersion.Latest);


            services.AddTransient<DbContext, ApplicationDbContext>();
            services.AddTransient<ApplicationDbContext>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("cors");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
