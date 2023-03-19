<script setup>
const route = useRoute();
const message = computed(
  () => `Hello ${route.params.userId}! Team: ${route.params.teamSlug}`
);
</script>

<template>
  <div>
    <h1>Team {{ $route.params.teamSlug }}</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<style scoped></style>
