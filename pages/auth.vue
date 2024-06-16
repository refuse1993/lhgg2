<template>
  <div id="AuthPage" class="w-full h-[100vh] h-screen pt-32">
    <div class="w-full">
      <div class="w-full flex items-center justify-center gap-2.5 p-2">
        <img class="w-[35px]" src="/threads-logo.png" />
        <span class="font-bold text-2xl text-white">Threads</span>
        <div class="text-white">{{ user }}</div>
      </div>

      <div class="max-w-[350px] mx-auto px-2 text-white">
        <div class="text-center mb-6 mt-4">Login / Register</div>

        <button
          @click="login('kakao')"
          class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">
            <img
              class="w-full max-w-[30px] rounded-full"
              src="/github-logo.png"
            />
            Github
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const config = useRuntimeConfig();

watchEffect(() => {
  if (user.value) {
    console.log("User is logged in:", user.value);
    return navigateTo("/");
  } else {
    console.log("No user is logged in");
  }
});

const login = async (prov) => {
  console.log("Login provider:", prov); // prov 값을 로그로 출력하여 확인
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    options: {
      redirectTo: config.public.redirectUri,
    },
  });

  if (error) console.log(error);
};
</script>
