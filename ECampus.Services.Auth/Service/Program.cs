using ECampus.Services.Auth.Data.Repositories;
using ECampus.Services.Auth.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using ECampus.Services.Auth.Data;
using ECampus.Services.Auth.Sync;
using Microsoft.EntityFrameworkCore;
using ECampus.Services.Auth.Sync;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ECampusDbContext>(options =>
{
    options.UseNpgsql(Environment.GetEnvironmentVariable("DB_URL_DOTNET")!);
});

Console.WriteLine(Environment.GetEnvironmentVariable("DB_URL_DOTNET")!);

// Add services to the container.

builder.Services.AddControllers();

// auth setup
string signingKeyPhrase = builder.Configuration["SigningKeyPhrase"];
SymmetricSecurityKey signingKey = new(Encoding.UTF8.GetBytes(signingKeyPhrase));

builder.Services
    .AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(config =>
    {
        config.RequireHttpsMetadata = true;
        config.SaveToken = true;
        config.TokenValidationParameters = new TokenValidationParameters
        {
            IssuerSigningKey = signingKey,
            ValidateAudience = false,
            ValidateIssuer = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ClockSkew = TimeSpan.Zero
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Auth", policy => policy.RequireClaim(JwtRegisteredClaimNames.Typ, "Auth"));
    options.AddPolicy("Refresh", policy => policy.RequireClaim(JwtRegisteredClaimNames.Typ, "Refresh"));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register jwt handlers
builder.Services.AddScoped<JwtTokenCreator>();
builder.Services.AddScoped<JwtRefreshTokenHandler>();

builder.Services.AddScoped<IMockRepostiory, MockRepository>();
builder.Services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
builder.Services.AddScoped<HttpSyncClient>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
