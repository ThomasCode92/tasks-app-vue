<script setup lang="ts">
import type { Task } from "../types";

const props = defineProps<{ tasks: Task[] }>();
const emits = defineEmits<{
  toggleDone: [id: string];
  removeTask: [id: string];
}>();
</script>

<template>
  <TransitionGroup name="task-list" tag="div">
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
  </TransitionGroup>
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

/* transition group styles */
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
