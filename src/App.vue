<template>
  <div>
    <Header />
    <main>
      <Accordion :accordion-entries="[{ name: 'test' }, { name: 'test2' }]">
        <template #test>
          <p>TEST CONTENT</p>
        </template>
        <template #test2>
          <p>TEST 2 CONTENT</p>
        </template>
      </Accordion>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accordion from './components/Accordion.vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Accordion,
    Header
  }
});
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
