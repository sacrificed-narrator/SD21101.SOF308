<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8">
          <div class="card mb-4 bg-dark text-white" v-for="post in store.posts" :key="post.id">
            <router-link :to="'/post/' + post.id">
              <img class="card-img-top" :src="post.image" :alt="post.title" />
            </router-link>
            <div class="card-body">
              <div class="small text-muted">{{ post.date }}</div>
              <h2 class="card-title">{{ post.title }}</h2>
              <p class="card-text">{{ post.content.substring(0, 150) }}...</p>
              <router-link class="btn" style="background-color: #ff6216; color: white;" :to="'/post/' + post.id">Read more →</router-link>
              
              <button v-if="store.user" @click="deletePost(post.id)" class="btn btn-danger ms-2">Delete</button>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
           </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from '../store'

const deletePost = (id) => {
  if(confirm("Are you sure?")) {
    store.posts = store.posts.filter(p => p.id !== id)
  }
}
</script>