// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true },
//   modules: ["@nuxtjs/tailwindcss"]


  
// })


// nuxt.config.js

export default {
  // Nuxt.js modules and other configuration options
  modules: ["@nuxtjs/tailwindcss"],

  head: {

     link:[
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.css',
      },

    ],
    
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js',
        defer: true // Optional: Add defer attribute if needed
      }
    ]
  }
}
