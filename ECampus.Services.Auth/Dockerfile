#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ECampus.Services.Auth/ECampus.Services.Auth.csproj", "ECampus.Services.Auth/"]
RUN dotnet restore "ECampus.Services.Auth/ECampus.Services.Auth.csproj"
COPY . .
WORKDIR "/src/ECampus.Services.Auth"
RUN dotnet build "ECampus.Services.Auth.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ECampus.Services.Auth.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ECampus.Services.Auth.dll"]