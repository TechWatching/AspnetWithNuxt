# Integrating an ASP.NET Core API with a Nuxt Front End

This samples demonstrates how to integrate an ASP.NET Core API with a Nuxt front end.

## What is it?

This repository is composed of 2 parts:
- a basic ASP.NET Core API  (in the `WebApi` folder) created from the .NET 9 `webapi` template
- a simple Nuxt front end (in the `WebApp` folder) created from the `v4-compat` template

This [blog article](https://techwatching.dev/posts/aspnetcore-with-nuxt) explains how this repository was created.

## Run the application

To run the application, you need to start both the API and the front

```powershell
// Launch the ASP.NET Core API
dotnet run --project WebApi\WebApi.csproj
```
```powershell
// Launch the Nuxt application front end
pnpm --dir WebApp dev
```