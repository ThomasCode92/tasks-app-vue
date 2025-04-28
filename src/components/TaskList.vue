<script setup lang="ts">
import type { Task } from "../types";

const props = defineProps<{ tasks: Task[] }>();
</script>

<template>
  <article v-for="task in props.tasks" :key="task.id" class="task-list">
    {{ task.title }}
  </article>
</template>

<style scoped>
.task-list {
  margin-top: 1rem;
}
</style>
