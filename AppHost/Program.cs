using AppHost;

var builder = DistributedApplication.CreateBuilder(args);

var webApi = builder.AddProject<Projects.WebApi>("WebApi");

var webApp= builder.AddPnpmApp("WebApp", "../WebApp", "dev")
    .WithHttpsEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .WithPnpmPackageInstallation()
    .WithReference(webApi)
    .WaitFor(webApi)
    .WithEnvironment("ApiUrl", webApi.GetEndpoint("https"))
    .WithEnvironmentPrefix("NUXT_PUBLIC_")
    .RunWithHttpsDevCertificate("CERT_PATH", "CERT_KEY_PATH");

builder.Build().Run();
