<script setup>
import bai1 from './components/bai1.vue'
import bai2 from './components/bai2.vue'
import bai3 from './components/bai3.vue'
import { ref } from "vue"
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">22 - Nguyễn Võ Vĩnh Lộc - Lab 4</h1>
    <ul class="nav nav-tabs" id="myTabs" role="tablist">
      <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#bai1">Bài 1</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#bai2">Bài 2</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#bai3">Bài 3</button></li>
    </ul>
    <div class="tab-content border p-3">
      <div class="tab-pane fade show active" id="bai1">
        <bai1 />
      </div>
      <div class="tab-pane fade" id="bai2">
        <bai2 />
      </div>
      <div class="tab-pane fade" id="bai3">
        <bai3 />
      </div>
    </div>
  </div>
  <hr />
  <div id="app">
    <h1>Bài 4</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
