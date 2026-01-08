<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Karate-Go | La web para aprender todo sobre el Karate',
  description:
    'Karate-Go es una web para aprender todo sobre el Karate, con videos, artículos, cursos y mucho más.'
})

useHead({
  htmlAttrs: {
    class: 'light'
  }
})
</script>
