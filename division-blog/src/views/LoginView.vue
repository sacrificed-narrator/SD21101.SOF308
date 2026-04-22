<template>
  <div class="wrapper mt-5">
    <div class="form-box login container" style="max-width: 400px;">
      <h2 class="fw-bold">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 fw-bold" style="background-color: #ff6216; border: none;">Login</button>
        <div class="mt-3 text-center">
          <p>Don't have an account? <router-link to="/register">Register now</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  store.login(email.value, password.value)
  router.push('/')
}
</script>