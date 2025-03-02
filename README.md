# Integrating an ASP.NET Core API with a Nuxt Front End

This samples demonstrates how to integrate an ASP.NET Core API with a Nuxt front end.

## What is it?

This repository is composed of 3 parts:
- a basic ASP.NET Core API  (in the `WebApi` folder) created from the .NET 9 `webapi` template
- a simple Nuxt front end (in the `WebApp` folder) created from the `v4-compat` template
- a .NET Aspire project (in the `AppHost` folder) to orchestrate the `WebApp` and `WebApi` projects

This [blog article](https://techwatching.dev/posts/aspnetcore-with-nuxt) explains how this repository was created.

## Pre-requisites

Before running the application, make sure to have configured `HTTPS` as explained [in this article](https://techwatching.dev/posts/aspnetcore-with-nuxt-https):
1. Create an `.env` file with the following content:
```text
NODE_TLS_REJECT_UNAUTHORIZED=0
```
2. Generate and trust the ASP.NET Core HTTPS Development certificate if you haven't already:
```bash
dotnet dev-certs https --trust
```
3. Create the certificate and private key files for the Nuxt front end:
```bash
dotnet dev-certs https --export-path ./WebApp/dev-cert.pem --format PEM -np
```

## Run the application without .NET Aspire

Add the URL of the API in your `.env` file:
```text
ApiUrl=https://localhost:7238
```

To run the application, you need to start both the API and the front

```bash
// Launch the ASP.NET Core API
dotnet run --project WebApi\WebApi.csproj
```
```bash
// Launch the Nuxt application front end
pnpm --dir WebApp dev
```

## Run the application with .NET Aspire

To run the application with .NET Aspire, you need to start the `AppHost` project:

```bash
dotnet run --project AppHost/AppHost.csproj
```
