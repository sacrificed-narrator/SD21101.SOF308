<template>
  <div>
    <h2>Đăng nhập</h2>
    <button @click="doLogin">Đăng nhập ngay</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function doLogin() {
  login();
  router.push({ name: "Dashboard" });
}
</script>