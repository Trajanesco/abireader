<template>
  <div>
    <Header />
    <main></main>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style>
html,
body {
  height: 100%;
  font-size: 16px;
  background: rgb(1, 161, 149);
  background: linear-gradient(
    71deg,
    rgba(1, 161, 149, 1) 0%,
    rgba(17, 77, 131, 1) 48%,
    rgba(58, 5, 185, 1) 100%
  );
}
body {
  color: var(--light);
  padding: var(--body-spacing);
}
</style>
