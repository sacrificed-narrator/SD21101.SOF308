<template>
  <div class="container">
    <form class="col-sm-4">
        <h3>Chọn ngôn ngữ</h3>
      <div v-for="item in name" :key="item.key">
        <input type="checkbox" :value="item.label" v-model="checkedNames">
        {{ item.label }} <br>
      </div>
      <p>Ngôn ngữ bạn chọn: {{ checkedNames.join(', ') }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const checkedNames = ref([]);

const name = [
    { key: "VN", label: "Tiếng Việt"},
    { key: "TA", label: "Tiếng Anh"},
    { key: "TT", label: "Tiếng Trung"}
]
</script>