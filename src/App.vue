<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");

function handleSubmit() {
  console.log(newTask.value);
}
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <form @submit.prevent="handleSubmit">
      <label for="newTask">New Task</label>
      <input id="newTask" v-model="newTask" name="newTask" />
      <div class="button-container">
        <button>Add</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}

.button-container {
  display: flex;
  justify-content: end;
}
</style>
