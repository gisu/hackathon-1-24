export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  devtools: {
    enabled: false
  },
  app: {
    head: {
      title: 'Website Performance Analysis | WebPros',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Analyze your website performance, SEO, and user experience with our free comprehensive analysis tool.'
        }
      ]
    }
  },
  ssr: true,
  nitro: {
    preset: 'netlify'
  }
})