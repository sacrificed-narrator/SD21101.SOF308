<template>
  <div>
    <h2>Trang cá nhân</h2>

    <nav>
      <router-link class="nav" to="/profile/info">Thông tin</router-link>
      <router-link class="nav" to="/profile/settings">Cài đặt</router-link>
    </nav>

    <hr/>
    
    <router-view></router-view>
  </div>
</template>

<style>
.nav {
  margin-right: 10px;
}
</style>
