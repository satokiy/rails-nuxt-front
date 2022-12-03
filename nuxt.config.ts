// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/style.css"],
  app: {
    head: {
      title: "Map Search",
      meta: [{ name: "description", content: "Address Search App" }],
      link: [{ rel: "icon", href: "/icons8-google-maps-48.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
