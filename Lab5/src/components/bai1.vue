<template>
  <h1>Bài 1</h1>
  <div class="p-5">
    <p>Thông điệp: {{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">QUA CAMPUCHIA NGAY!1!1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('HÃY QUA CAMPUCHIA, VIỆC NHẸ LƯƠNG CAO, NGÀY ĂN 4 BỮA, ĐIỀU KIỆN LÀM VIỆC TUYỆT VỜI!!');
const updateMessage = () => { message.value = '⚡200V 9h sáng, 225V 11h30 trưa, 200V 5h chiều, tối tùy⚡'; };
</script>
