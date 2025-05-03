<script setup lang="ts">
import type { Task } from "../types";

const props = defineProps<{ tasks: Task[] }>();
const emits = defineEmits<{
  toggleDone: [id: string];
  removeTask: [id: string];
}>();
</script>

<template>
  <article v-for="task in props.tasks" :key="task.id" class="task">
    <label :for="task.id + '-toggle'">
      <input
        :id="task.id + '-toggle'"
        :checked="task.done"
        type="checkbox"
        @input="emits('toggleDone', task.id)"
      />
      <span :class="{ done: task.done }">{{ task.title }}</span>
    </label>
    <button class="outline secondary" @click="emits('removeTask', task.id)">
      Remove
    </button>
  </article>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.done {
  text-decoration: line-through;
}
</style>
