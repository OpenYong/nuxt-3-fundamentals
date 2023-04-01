<template>
  <nav style="display: flex; gap: 1rem">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://nuxt.com/modules">Nuxt Moduels</NuxtLink>
  </nav>
  <slot> </slot>
</template>
