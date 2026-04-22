<template>
  <div class="container mb-5 mt-5" v-if="post">
    <div class="row">
      <div class="col-md-8">
        <div class="card text-start bg-dark text-white p-3">
          <p class="text-muted" by {{ post.authorName }}>Author: {{ authorName }}</p>
          <h2 class="mb-3">{{ post.title }}</h2>
          <img class="card-img-top mb-3" :src="post.image" alt="Post Image" />
          <div class="card-body">
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="mb-5 text-white">
          <h4 class="mb-4">Comments ({{ comments.length }})</h4>
          
          <div v-for="c in comments" :key="c.id" class="p-2 mb-2 bg-secondary rounded">
            <strong>{{ c.author }}</strong> <small>({{ c.time }})</small>
            <p class="m-0">{{ c.text }}</p>
          </div>

          <div v-if="store.user" class="mt-4">
            <textarea v-model="newComment" class="form-control" rows="3" placeholder="Write a comment..."></textarea>
            <button @click="addComment" class="btn text-white mt-2" style="background-color: #ff6216;">Comment</button>
          </div>
          <div v-else class="mt-4">
            <p><router-link to="/login" style="color: #ff6216;">Log in</router-link> to leave a comment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'

const route = useRoute()
const post = computed(() => store.posts.find(p => p.id == route.params.id))

const comments = ref([
  { id: 1, author: 'Agent Kelso', text: 'Great Intel.', time: '1 hour ago' }
])
const newComment = ref('')

const addComment = () => {
  if(newComment.value.trim() === '') return;
  comments.value.push({
    id: Date.now(),
    author: store.user.name,
    text: newComment.value,
    time: 'Just now'
  })
  newComment.value = ''
}
</script>