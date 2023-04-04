<script setup>
const user = useUser();
definePageMeta({
  layout: "plain",
});
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>로그인</h1>
    <label for="name"
      >이름
      <input type="text" name="name" id="name" />
    </label>
    <label for="password"
      >비밀번호
      <input type="password" name="password" id="password" />
    </label>
    <button>로그인</button>
  </form>
</template>
