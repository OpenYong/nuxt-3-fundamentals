<script setup>
definePageMeta({
  layout: "plain",
});
</script>

<template>
  <form action="">
    <h1>로그인</h1>
    <label for="name"
      >이름
      <input type="text" name="name" id="name" />
    </label>
    <label for="password"
      >비밀번호
      <input type="password" name="password" id="password" />
    </label>
  </form>
</template>
