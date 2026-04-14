<template>
  <div class="p-4">
    <h2>Chi tiết bài viết</h2>
    <p>ID bài viết: {{ $route.params.id }}</p>

    <button @click="goBack">Quay lại BlogList</button>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  methods: {
    goBack() {
      this.$router.push({ name: "BlogList" });
    },
  },
};
</script>