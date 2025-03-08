declare module 'nuxt/schema' {
  interface RuntimeConfig {
  }
  interface PublicRuntimeConfig {
    otelExporterOtlpEndpoint: string,
    otelExporterOtlpHeaders: string,
    otelResourceAttributes: string,
    otelServiceName: string,
    apiUrl: string,
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}