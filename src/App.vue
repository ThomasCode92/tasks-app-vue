<script setup lang="ts">
import TaskForm from "./components/TaskForm.vue";

function addTask(newTask: string) {
  console.log("New task added:", newTask);
}
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <TaskForm @add-task="addTask" />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
