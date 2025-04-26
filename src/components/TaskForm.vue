<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");

function handleSubmit() {
  console.log(newTask.value);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="newTask">New Task</label>
    <input id="newTask" v-model="newTask" name="newTask" />
    <div class="button-container">
      <button>Add</button>
    </div>
  </form>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: end;
}
</style>
