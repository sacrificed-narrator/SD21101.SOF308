<template>
  <div class="container mt-4">
    <div class="p-5 mb-4 bg-light rounded-3 border">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold text-success">Chào mừng trở lại!</h1>
        <p class="col-md-8 fs-4">
          Bạn đã đăng nhập thành công vào hệ thống quản trị của Lộc.
        </p>
        <div class="mt-4">
          <button @click="logout" class="btn btn-outline-danger">Đăng xuất</button>
        </div>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h3>3</h3>
          <p class="text-muted">Bài viết</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h3>12</h3>
          <p class="text-muted">Bình luận</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h3>1,024</h3>
          <p class="text-muted">Lượt xem</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.removeItem("isAuthenticated");
  router.push("/login");
}
</script>