export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    // "shadcn-nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },
  devtools: { enabled: false },
  supabase: { redirect: false },
});
