export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "MedLabConvo | Leading Change, Inspiring Action, Building Capacity",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
//   modules: ["@nuxtjs/tailwindcss", ['@nuxtjs/google-fonts', {
//     families: {
//       Roboto: true,
//       Inter: [400, 700],
//       'Josefin+Sans': true,
//       Lato: [100, 300],
//       Raleway: {
//         wght: [100, 400],
//         ital: [100]
//       },
//       Inter: '200..700',
//       'Crimson Pro': {
//         wght: '200..900',
//         ital: '200..700',
//       }
//     }
// }],],
modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
googleFonts: {
  families: {
    Roboto: true, // Replace 'Roboto' with any available Google Font
  },
  display: 'swap', // Optional: Controls how the font is displayed
},
  plugins: ["~/plugins/aos.client.ts"],
  css: ["/assets/css/main.css", 'leaflet/dist/leaflet.css'],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },
  dir: {
    static: 'public', // Ensure the  folder is treated as static
  },
  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
};
