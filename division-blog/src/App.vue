<template>
  <NavBar />
  <router-view />
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <div class="container">
        <p class="m-0 text-center text-white">Made by ink_sac. Copyright &copy; FPT Polytechnic, 2026</p>
    </div>
  </footer>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>