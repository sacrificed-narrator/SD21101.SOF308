<template>
  <div class="d-flex justify-content-center align-items-center" style="min-height: 50vh;">
    <div class="card shadow-sm" style="width: 100%; max-width: 400px;">
      <div class="card-body p-4">
        <h2 class="card-title text-center mb-4">Đăng nhập</h2>
        
        <div class="mb-3">
          <label class="form-label">Tên đăng nhập</label>
          <input type="text" class="form-control" v-model="username" placeholder="admin">
        </div>
        
        <div class="mb-4">
          <label class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" v-model="password" placeholder="••••••••">
        </div>
        
        <button @click="doLogin" class="btn btn-primary w-100 py-2">
          Đăng nhập ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");

function doLogin() {
  console.log("Logging in with:", { 
    user: username.value, 
    pass: password.value 
  });

  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("user", username.value || "Khách");
  
  router.push({ name: "Dashboard" });
}
</script>