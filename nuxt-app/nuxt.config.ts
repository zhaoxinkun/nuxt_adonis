// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  // pages: {
  //   pattern: ['**/*.vue', '!**/components/**/*.vue']
  // },
  //
  // components: [
  //   { path: '~/components' },
  //   { path: '~/pages', pattern: '**/components/**/*.vue', pathPrefix: true }
  // ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
