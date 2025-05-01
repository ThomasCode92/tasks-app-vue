<script setup lang="ts">
import type { Task } from "../types";

const props = defineProps<{ tasks: Task[] }>();
const emits = defineEmits<{ toggleDone: [id: string] }>();
</script>

<template>
  <article v-for="task in props.tasks" :key="task.id" class="task-list">
    <input
      :id="task.id + '-toggle'"
      :checked="task.done"
      type="checkbox"
      @input="emits('toggleDone', task.id)"
    />
    <label :for="task.id + '-toggle'">{{ task.title }} </label>
  </article>
</template>

<style scoped>
.task-list {
  margin-top: 1rem;
}
</style>
