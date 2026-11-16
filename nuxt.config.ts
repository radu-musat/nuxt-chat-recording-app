// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  $production: {
    nitro: {
      storage: {
        db: {
          driver: 'netlify-blobs',
          name: 'db',
        },
      },
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    openaiApiKey: '',
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './.data',
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        indent: 2,
      },
    },
  },
});
