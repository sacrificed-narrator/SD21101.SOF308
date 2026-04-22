<template>
  <div class="wrapper mt-5">
    <div class="form-box register container" style="max-width: 400px;">
      <h2 class="fw-bold">Registration</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" v-model="username" required placeholder="Enter your name">
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" required placeholder="email@example.com">
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password" required placeholder="********">
        </div>

        <button type="submit" class="btn btn-primary w-100 fw-bold" style="background-color: #ff6216; border: none;">
          Register
        </button>

        <div class="mt-3 text-center">
          <p>Already have an account? <router-link to="/login">Login</router-link> now!</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store' // Import store để lưu thông tin đăng ký (nếu cần)

// Khai báo các biến reactive cho Form
const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
  console.log("Registering:", username.value, email.value);
  
  // Gọi hàm login trong store để giả lập trạng thái đã đăng nhập
  store.login(email.value, password.value);
  // Cập nhật tên hiển thị nếu store hỗ trợ
  store.user.name = username.value;

  // Thông báo và chuyển hướng
  alert('Registration Successful!');
  router.push('/');
}
</script>

<style scoped>
.form-box {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>