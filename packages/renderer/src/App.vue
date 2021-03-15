<template>
  <img alt="OK logo" src="../assets/logo.png" style="width: 50%" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "/@/components/AppNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
