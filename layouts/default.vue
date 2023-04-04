<script setup>
const isLoggedIn = useIsLoggedIn();
</script>

<template>
  <nav style="display: flex; gap: 1rem">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://nuxt.com/modules">Nuxt Moduels</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">로그인</NuxtLink>
    <a href="#" v-if="isLoggedIn" @click.prevent="isLoggedIn = false"
      >로그아웃</a
    >
  </nav>
  <slot> </slot>
</template>
