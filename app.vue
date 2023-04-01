<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Yongs 영화 앱` : "Yongs 영화 앱";
  },
  meta: [
    {
      name: "description",
      content: "Nuxt.js is a web application framework",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
