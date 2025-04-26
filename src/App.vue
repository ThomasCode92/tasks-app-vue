<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");
</script>

<template>
  <main>
    <h1>Tasks App</h1>
    <form>
      <label for="newTask">New Task</label>
      <input id="newTask" v-model="newTask" name="newTask" />
    </form>
    <h3>{{ newTask }}</h3>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
}
</style>
