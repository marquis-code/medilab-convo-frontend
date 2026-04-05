import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,

  devServer: {
    port: 3002,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "MedLabConvo | Advancing Medical Laboratory Science & Healthcare",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "MedLabConvo is building the capacity of global professionals in medical laboratory science to transform healthcare. Explore our programs, journals, and community." },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "medical laboratory science, healthcare innovation, lab professional development, medical lab programs, MedLabConvo" },
        { name: "robots", content: "index, follow" },

        // Open Graph Meta Tags
        { property: "og:title", content:  "MedLabConvo | Leading Change in Health Science" },
        { property: "og:description", content:  "Transforming healthcare through knowledge platforms and professional tools for medical laboratory scientists." },
        { property: "og:image", content: "/images/medlabconvo-og-image.jpg" },
        { property: "og:url", content: "https://www.medlabconvo.com" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "MedLabConvo" },
      
        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content:  "MedLabConvo | Healthcare Evolution" },
        { name: "twitter:description", content:  "Join the global community of laboratory professionals shaping the future of healthcare." },
        { name: "twitter:image", content: "/images/medlabconvo-twitter-image.jpg" },
        { name: "twitter:site", content: "@medlabconvo" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  build: {
    transpile: ["lucide-vue-next"],
  },

  css: ['/assets/font/stylesheet.css', "/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots"
  ],

   googleFonts: {
    families: {
      "Inter": [400, 500, 600, 700],
      "Poppins": [400, 500, 600, 700],
      "Onest": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    preload: true,
  },
  compatibilityDate: '2025-04-08'
});