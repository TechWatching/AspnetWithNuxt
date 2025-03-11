namespace AppHost;

public static class EnvironmentExtensions
{
    public static IResourceBuilder<T> WithEnvironmentPrefix<T>(this IResourceBuilder<T> resourceBuilder, string prefix)
        where T : IResourceWithEnvironment
    {
        return resourceBuilder.WithEnvironment(context =>
        {
            var kvps = context.EnvironmentVariables.ToArray();

            // Adds a prefix to all environment variable names
            foreach (var p in kvps)
            {
                context.EnvironmentVariables[$"{prefix}{p.Key}"] = p.Value;
            }
        });
    }
}