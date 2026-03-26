<script setup>
import Hello from './components/Hello.vue'
import Bai3 from './components/Bai3.vue'
import Bai4 from './components/Bai4.vue'
import slide4l4 from './components/slide4l4.vue';

</script>

<template>
<div class="container mt-5">
  <h1 class="text-center">22 - Nguyễn Võ Vĩnh Lộc - Lab 4</h1>
  <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#bai2">Bài 2</button></li>
        <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#bai3">Bài 3</button></li>
        <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#bai4">Bài 4</button></li>
        <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#sl4">Slide 4 Lab 4</button></li>
    </ul>
    <div class="tab-content border p-3">
      <div class="tab-pane fade show active" id="bai2"><Hello /></div>
      <div class="tab-pane fade" id="bai3"><Bai3 /></div>
      <div class="tab-pane fade" id="bai4"><Bai4 /></div>
      <div class="tab-pane fade" id="sl4"><slide4l4 /></div>
    </div>
</div>
</template>

<style scoped>
</style>