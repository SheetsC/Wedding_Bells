# Use the official ASP.NET Core runtime image from Microsoft
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5021

# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["WeddingBells.API/WeddingBells.API.csproj", "WeddingBells.API/"]
RUN dotnet restore "WeddingBells.API/WeddingBells.API.csproj"
COPY . .
WORKDIR "/src/WeddingBells.API"
RUN dotnet build "WeddingBells.API.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "WeddingBells.API.csproj" -c Release -o /app/publish

# Final stage/image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WeddingBells.API.dll"]
