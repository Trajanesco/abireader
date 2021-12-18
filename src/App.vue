<template>
  <main>
    <h1 class="text-2xl text-center">Hej - coś wspaniałego</h1>
    <Accordion :accordion-entries="[{ name: 'test' }, { name: 'test2' }]">
      <template #test>
        <p>TEST CONTENT</p>
      </template>
      <template #test2>
        <p>TEST 2 CONTENT</p>
      </template>
    </Accordion>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accordion from './components/Accordion.vue';
export default defineComponent({
  components: {
    Accordion
  }
});
</script>

<style>
html,
body {
  height: 100%;
  font-size: 16px;
}
body {
  background-color: var(--bg);
  color: var(--light);
}
</style>
