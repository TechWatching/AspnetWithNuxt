var builder = DistributedApplication.CreateBuilder(args);

var webApi = builder.AddProject<Projects.WebApi>("WebApi");

var webApp= builder.AddViteApp("WebApp", "../WebApp", "pnpm")
    .WithPnpmPackageInstallation()
    .WithReference(webApi)
    .WaitFor(webApi);

// var webApp= builder.AddPnpmApp("WebApp", "../WebApp", "dev")
//     .WithHttpsEndpoint(env: "PORT")
//     .WithExternalHttpEndpoints()
//     .WithPnpmPackageInstallation()
//     .WithReference(webApi)
//     .WaitFor(webApi);


builder.Build().Run();
