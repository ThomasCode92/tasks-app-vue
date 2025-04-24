<script setup lang="ts">
import { ref } from "vue";

const title = ref("Tasks App");
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
