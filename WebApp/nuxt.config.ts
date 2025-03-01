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
        proxy: `${import.meta.env.services__WebApi__https__0}/**`,
      }
    },
    devServer: {
      https: {
        key: 'dev-cert.key',
        cert: 'dev-cert.pem'
      }
    }
  },
})
