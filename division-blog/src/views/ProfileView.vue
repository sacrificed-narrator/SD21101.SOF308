<template>
  <div class="container mt-5 mb-5" style="max-width: 500px;">
    <div class="card bg-dark text-white p-4">
      <h3 class="mb-4 text-center">My Profile</h3>
      <form @submit.prevent="updateInfo">
        <div class="mb-3 text-center">
          <img :src="profile.avatar" class="rounded-circle mb-3" style="width: 100px; height: 100px; object-fit: cover;">
        </div>
        <div class="mb-3">
          <label>Display Name</label>
          <input v-model="profile.name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Email Address</label>
          <input v-model="profile.email" type="email" class="form-control" required>
        </div>
        <button type="submit" class="btn w-100 text-white" style="background-color: #ff6216;">Update Information</button>
        <div v-if="successMsg" class="alert alert-success mt-3">{{ successMsg }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { store } from '../store'

const profile = reactive({ name: '', email: '', avatar: '' })
const successMsg = ref('')

onMounted(() => {
  if (store.user) {
    profile.name = store.user.name
    profile.email = store.user.email
    profile.avatar = store.user.avatar
  }
})

const updateInfo = () => {
  store.updateProfile(profile.name, profile.email)
  successMsg.value = 'Profile updated successfully!'
  setTimeout(() => successMsg.value = '', 3000)
}
</script>