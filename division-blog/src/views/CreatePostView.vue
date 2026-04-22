<template>
  <div class="container mt-5 mb-5" style="max-width: 600px;">
    <div class="card bg-dark text-white p-4">
      <h3 class="mb-4 text-center">Create New Post</h3>
      <form @submit.prevent="submitPost">
        <div class="mb-3">
          <label>Title</label>
          <input v-model="newPost.title" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Image URL</label>
          <input v-model="newPost.image" type="text" class="form-control" placeholder="/images/post1.jpg" required>
        </div>
        <div class="mb-3">
          <label>Content</label>
          <textarea v-model="newPost.content" class="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn text-white" style="background-color: #ff6216;">Publish</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store'

const router = useRouter()
const newPost = reactive({ title: '', image: '/images/factions.jpg', content: '' })

const submitPost = () => {
  store.posts.unshift({
    id: Date.now(),
    title: newPost.title,
    date: new Date().toLocaleDateString(),
    image: newPost.image,
    content: newPost.content,
    category: 'General'
  })
  router.push('/')
}
</script>