// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  $development: {
    routeRules: {
      '/api/**': {
        proxy: `${import.meta.env.ApiUrl}/**`,
      }
    },
    devServer: {
      https: {
        key: import.meta.env.CERT_KEY_PATH ?? 'dev-cert.key',
        cert: import.meta.env.CERT_PATH ?? 'dev-cert.pem'
      }
    }
  },
  runtimeConfig: {
    public: {
      otelExporterOtlpEndpoint: '',
      otelExporterOtlpHeaders: '',
      otelResourceAttributes: '',
      otelServiceName: '',
    }
  }
})
