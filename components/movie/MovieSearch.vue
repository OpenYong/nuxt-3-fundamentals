<script setup>
const query = ref("batman");
const movies = ref([]);
const searchMovie = async () => {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=74d733cd&s=${query.value}`
  );
  movies.value = Search;
};
searchMovie();
</script>

<template>
  <form @submit.prevent="searchMovie">
    <input type="text" v-model="query" />
    <button>검색</button>
  </form>
  <ul class="flex flex-wrap gap-4">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" />
        <h3>{{ movie.Title }}</h3>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
