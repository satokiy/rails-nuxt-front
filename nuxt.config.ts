// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "assets/css/style.css",
    "~/assets/css/tailwind.css",
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      title: "Map Search",
      meta: [{ name: "description", content: "Address Search App" }],
      link: [{ rel: "icon", href: "/icons8-google-maps-48.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
