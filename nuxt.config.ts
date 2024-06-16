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
      redirectUri: process.env.NUXT_PUBLIC_REDIRECT_URI,
    },
  },
  devtools: { enabled: false },
  supabase: { redirect: false },
});
