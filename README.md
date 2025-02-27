# Integrating an ASP.NET Core API with a Nuxt Front End

This samples demonstrates how to integrate an ASP.NET Core API with a Nuxt front end.

## What is it?

This repository is composed of 2 parts:
- a basic ASP.NET Core API  (in the `WebApi` folder) created from the .NET 9 `webapi` template
- a simple Nuxt front end (in the `WebApp` folder) created from the `v4-compat` template

This [blog article](https://techwatching.dev/posts/aspnetcore-with-nuxt) explains how this repository was created.

## Run the application

Before running the application, make sure to have configured `HTTPS` as explained [in this article](https://techwatching.dev/posts/aspnetcore-with-nuxt-https):
1. Create an `.env` file with the following content:
```text
NODE_TLS_REJECT_UNAUTHORIZED=0
```
2. Generate and trust the ASP.NET Core HTTPS Development certificate:
```bash
dotnet dev-certs https --trust
```
3. Create the certificate and private key files for the Nuxt front end:
```bash
dotnet dev-certs https --export-path ./WebApp/dev-cert.pem --format PEM -np
```

To run the application, you need to start both the API and the front

```powershell
// Launch the ASP.NET Core API
dotnet run --project WebApi\WebApi.csproj
```
```powershell
// Launch the Nuxt application front end
pnpm --dir WebApp dev
```