<template>
  <div class="p-5" id="app">
    <h1>Blog của thằng Lộc</h1>

    <nav>
      <router-link class="nav" to="/">Home</router-link>
      <router-link class="nav" to="/blog">Blog</router-link>
      <router-link class="nav" to="/profile">Profile</router-link>
      <router-link class="nav" to="/dashboard">Dashboard</router-link>
      <router-link class="nav" to="/login">Login</router-link>
    </nav>

    <hr />
    <router-view />
  </div>
</template>

<style>
.nav {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}
.nav:hover {
  color: #42b983;
}
</style>