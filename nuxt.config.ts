import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,

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
      title: "MedLabConvo - We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large.",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large. " },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large. Transforming Healthcare One Lab Professional at a Time" },
        { name: "robots", content: "index, follow" },

        // Open Graph Meta Tags
        { property: "og:title", content:  "MedLabConvo - We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large." },
        { property: "og:description", content:  "MedLabConvo - We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large." },
        { property: "og:image", content: "/images/medlabconvo-og-image.jpg" },
        { property: "og:url", content: "https://www.medlabconvo.com" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "medlabconvo" },
      
        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content:  "MedLabConvo - We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large." },
        { name: "twitter:description", content:  "MedLabConvo - We are leading change, inspiring action, and building the capacity of future generations of world-class professionals in medical laboratory science and in the healthcare system at large." },
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

  css: ['/assets/css/font/stylesheet.css', "/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
  ],

  googleFonts: {
    families: {
      // Add your preferred fonts here
      "Inter": [400, 500, 600, 700],
      "Poppins": [400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },

  compatibilityDate: '2025-04-08'
});