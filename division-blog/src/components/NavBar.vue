<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <img src="/images/icon.jpg" alt="logo" style="width: 50px;">
      <router-link class="navbar-brand fw-bold ms-2" to="/">Strategic Homeland Division</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/info">Info</router-link></li>
          
          <template v-if="!store.user">
            <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
          </template>

          <template v-else>
            <li class="nav-item"><router-link class="nav-link" to="/create-post">Create Post</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/profile">Hello, {{ store.user.name }}</router-link></li>
            <li class="nav-item"><a class="nav-link" href="#" @click.prevent="handleLogout">Logout</a></li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { store } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  store.logout()
  router.push('/login')
}
</script>