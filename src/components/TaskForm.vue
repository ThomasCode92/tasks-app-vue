<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");
const error = ref("");

const emit = defineEmits<{ addTask: [newTask: string] }>();

function handleSubmit() {
  const inputValue = newTask.value.trim();
  if (inputValue) {
    emit("addTask", inputValue);
    newTask.value = "";
  } else {
    error.value = "Task cannot be empty";
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="newTask">New Task</label>
    <input
      id="newTask"
      v-model="newTask"
      :aria-invalid="Boolean(error) || undefined"
      @input="error = ''"
    />
    <small v-if="error" id="invalid-helper">{{ error }}</small>
    <div class="button-container">
      <button>Add</button>
    </div>
  </form>
</template>
