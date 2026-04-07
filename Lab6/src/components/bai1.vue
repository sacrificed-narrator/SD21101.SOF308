<template>
  <div class="container">
      <h1>Xếp loại học sinh theo điểm trung bình</h1>

      <input 
        type="number" 
        v-model.number="diemTB" 
        placeholder="Nhập điểm trung bình"
        min="0" max="10" step="1"
      />

      <p v-if="diemTB < 5.0">Xếp loại: Yếu</p>
      <p v-else-if="diemTB >= 5.0 && diemTB < 6.5">Xếp loại: Trung bình</p>
      <p v-else-if="diemTB >= 6.5 && diemTB < 8.0">Xếp loại: Khá</p>
      <p v-else-if="diemTB >= 8.0 && diemTB < 9.0">Xếp loại: Giỏi</p>
  </div>
</template>

<script setup>
import { ref } from "vue"
// Biến reactive dùng để lưu trữ giá trị điểm mà người dùng nhập từ ô 
const diemTB = ref(null)
</script>

<style scoped>
</style>
