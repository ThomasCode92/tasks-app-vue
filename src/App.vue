<script setup lang="ts">
import { computed, ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import type { Task } from "./types";

const tasks = ref<Task[]>([]);
const totalDone = computed(() =>
  tasks.value.reduce((total, task) => (task.done ? total + 1 : total), 0),
);

function addTask(newTask: string) {
  const id = crypto.randomUUID();
  tasks.value.push({ id, title: newTask, done: false });
}

function toggleDone(id: string) {
  const task = tasks.value.find(task => task.id === id);
  if (task) task.done = !task.done;
}

function removeTask(id: string) {
  const index = tasks.value.findIndex(task => task.id === id);
  if (index !== -1) tasks.value.splice(index, 1);
}
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <TaskForm @add-task="addTask" />
    <h3 v-if="!tasks.length">Add a task to get started.</h3>
    <h3 v-else>{{ totalDone }} / {{ tasks.length }} tasks completed.</h3>
    <TaskList :tasks @toggle-done="toggleDone" @remove-task="removeTask" />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
