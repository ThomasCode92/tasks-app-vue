<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
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
    <h3 v-if="!tasks.length">Add a task to get started.</h3>
    <h3 v-else>0 / {{ tasks.length }} tasks completed.</h3>
    <TaskList :tasks />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
