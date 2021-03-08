<template>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
