<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import type { Task } from "./types";

const tasks = ref<Task[]>([]);

function addTask(newTask: string) {
  const id = crypto.randomUUID();
  tasks.value.push({ id, title: newTask, done: false });
}
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <TaskForm @add-task="addTask" />
    <article v-for="task in tasks" :key="task.id">
      {{ task.title }}
    </article>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
