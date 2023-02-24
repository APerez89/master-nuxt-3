<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Sheeeeeesh!</h1>
      <p>Looks like you broke something.</p>
      <p>Lets see if we can fix it.</p>
      <p>
        <strong class="text-red-500">{{ error.message }}</strong>
      </p>
      <p>
        Go back to the
        <a
          class="hover:cursor-pointer"
          @click="handleError"
        >
          first lesson.
        </a>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const error = useError();
  const handleError = () => {
    clearError({
      redirect:
      '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
    });
  }
</script>