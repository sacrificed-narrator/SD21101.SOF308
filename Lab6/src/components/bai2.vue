<template>
    <div class="container">
        <h3>Nhập tháng của bạn:</h3>
        <input type="number" v-model.number="month" min="0" max="12" step="1"/>
        <p v-if="month < 1 || month > 12" style="color: red">Vui lòng nhập tháng từ 1 đến 12!</p>
        <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
        <p v-else-if="month <= 6">Mùa Hè</p>
        <p v-else-if="month <= 9">Mùa Thu</p>
        <p v-else>Mùa Đông</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// Biến reactive dùng để lưu trữ giá trị tháng mà người dùng nhập từ ô 
const month = ref('1');
</script>
