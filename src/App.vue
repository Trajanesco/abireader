<template>
  <div>
    <Header />
    <main>
      <SectionExplanation />
      <SectionContract>
        <ImportFiles @loading="isLoading = $event" />
      </SectionContract>

      <Loader v-if="isLoading" />
      <Accordion :accordion-entries="[{ name: 'test' }, { name: 'test2' }]">
        <template #test>
          <p>TEST CONTENT</p>
        </template>
        <template #test2>
          <p>TEST 2 CONTENT</p>
        </template>
      </Accordion>
      <pre>
        Hej, tutaj trafią pliki
        {{ files }}
      </pre>
    </main>
  </div>
</template>
<script setup lang="ts">
import Accordion from './components/Accordion.vue';
import Header from './components/Header.vue';
import Loader from './components/Loader.vue';
import ImportFiles from './components/ImportFiles/ImportFiles.vue';
import { computed, ref } from 'vue';
import SectionExplanation from './components/SectionExplanation/SectionExplanation.vue';
import SectionContract from './components/SectionContract/SectionContract.vue';
import useFiles from './composables/useFiles';

const isLoading = ref(false);
const files = computed(() => useFiles().getFiles());
</script>

<style lang="scss">
*:focus {
  outline: 2px solid #078e91 !important;
  border-radius: var(--base-radius);
}
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
