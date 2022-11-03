using ECampus.Services.Auth.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using MigrationsApplier;

Console.WriteLine("Applying migrations");
var webHost = new WebHostBuilder()
    .UseContentRoot(Directory.GetCurrentDirectory())
    .UseStartup<MigrationsApplierStartup>()
    .Build();

using (var context = (ECampusDbContext)webHost.Services.GetService(typeof(ECampusDbContext))!)
{
    context.Database.Migrate();
}
Console.WriteLine("Done");