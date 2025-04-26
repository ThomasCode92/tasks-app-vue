<script setup lang="ts">
import TaskForm from "./components/TaskForm.vue";
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <TaskForm />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
