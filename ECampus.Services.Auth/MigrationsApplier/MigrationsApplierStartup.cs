using System;
using System.Collections.Generic;
using System.Linq;
using ECampus.Services.Auth.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MigrationsApplier
{

    public class MigrationsApplierStartup
    {
        public MigrationsApplierStartup()
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ECampusDbContext>(options =>
            {
                options.UseNpgsql(Environment.GetEnvironmentVariable("DB_URL")!);
            });
            Console.WriteLine(Environment.GetEnvironmentVariable("DB_URL")!);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

        }
    }
}

