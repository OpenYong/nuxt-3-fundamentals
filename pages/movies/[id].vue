<script setup>
const route = useRoute();
const { data, error } = await useFetch(
  `http://www.omdbapi.com/?apikey=74d733cd&i=${route.params.id}`,
  {
    pick: ["Title", "Plot", "Error"],
    key: `/movies/${route.params.id}`,
  }
);
if (error.value) {
  showError({
    statusCode: 500,
    statusMessage: "잠시 후 다시 시도해주세요.",
  });
}

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({
    statusCode: 404,
    statusMessage: "영화를 찾을 수 없습니다.",
  });
}

// const { data } = await useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=74d733cd&i=${route.params.id}`
//     );
//   },
//   {
//     pick: ["Title", "Plot"],
//     // transform(data) {
//     //   return {
//     //     Plot: data.Plot,
//     //     Title: data.Title,
//     //   };
//     //   return data.Title;
//     // },
//   }
// );
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
