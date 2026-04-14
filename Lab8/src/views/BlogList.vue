<template>
  <div class="p-4">
    <h2>Danh sách bài viết</h2>

    <ul>
      <li v-for="id in 3" :key="id">
        <router-link :to="`/blog/${id}`">Bài viết số {{ id }}</router-link>
      </li>
    </ul>
  </div>
</template>
