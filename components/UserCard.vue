<template>
  <div
    v-if="user"
    class="rounded p-3 flex items-center space-x-3 bg-white"
  >
    <img :src="profile" class="rounded-full w-12 h-12 border-2 border-blue-400" />
    <div class="text-right">
      <div class="font-medium">{{ name }}</div>
      <button
        class="text-sm underline text-slate-500"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  // The Nuxt Supabase auth *should* be doing this automagically, but it is not. This is the *hack*
  // This simulates what the nuxt supabase auth module should be doing which is to post to the endpoint and telling the supabase module that we are signed out
  try {
    await $fetch('/api/_supabase/session', {
      method: 'POST',
      body: { event: 'SIGNED_OUT', session: null },
    });
    user.value = null;
  } catch (e) {
    console.error(error);
  }

  await navigateTo('/login');
};


const name = computed(
  () => user.value?.user_metadata.full_name
);

const profile = computed(
  () => user.value?.user_metadata.avatar_url
);

</script>