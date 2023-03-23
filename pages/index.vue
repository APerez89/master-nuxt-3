<template>
  <div class="prose">
    <h1>
      Heller, World!
    </h1>

    <NuxtLink
      class="underline font-medium"
      :href="firstLesson.path"
    >
      Go to first lesson
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>