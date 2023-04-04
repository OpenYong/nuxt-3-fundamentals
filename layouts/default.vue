<script setup>
const user = useUser();
</script>

<template>
  <nav style="display: flex; gap: 1rem">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://nuxt.com/modules">Nuxt Moduels</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">로그인</NuxtLink>
    <a href="#" v-if="user.isLoggedIn" @click.prevent="user.isLoggedIn = false"
      >로그아웃</a
    >
  </nav>
  <slot> </slot>
</template>
