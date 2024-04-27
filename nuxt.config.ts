// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: "~/components/landing", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },

    "~/components",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Uni-verse",
      meta: [
        {
          name: "description",
          content: "Landing site for the Uni-verse society",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
      ],
    },
  },
});
