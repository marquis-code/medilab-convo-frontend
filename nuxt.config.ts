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
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" },    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;700&display=swap',
      },],
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
googleFonts: {
  families: {
    'Rethink+Sans': [400, 500, 700], // Specify font weights as needed
  },
  display: 'swap', // Optional: Controls how the font is displayed
  prefetch: true, // Optional: Prefetch the font for faster loading
  preconnect: true, // Optional: Preconnect to the font server
  preload: true, // Optional: Preload the font
},
modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
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
