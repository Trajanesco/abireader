<template>
  <div id="app-wrapper">
    <SvgAnimation />
    <Header />
    <main>
      <SectionExplanation />
      <ImportFiles
        v-if="files.length === 0"
        class="flex justify-center"
        @loading="isLoading = $event"
      >
        <template #button-title>Import ABI file here</template>
      </ImportFiles>
      <SectionContract v-if="files.length !== 0">
        <ImportFiles @loading="isLoading = $event">
          <template #button-title>Import file</template>
        </ImportFiles>
      </SectionContract>

      <Loader v-if="isLoading" />

      <div v-if="files.length !== 0">
        <AccordionSection />
      </div>
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
import AccordionSection from './components/AccordionSection/AccordionSection.vue';
import useFiles from './composables/useFiles';
import SvgAnimation from './components/SvgAnimation.vue';

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
}
body {
  color: var(--light);
  padding: var(--body-spacing);
  background: rgb(1, 161, 149);
  background: linear-gradient(
    71deg,
    rgba(1, 161, 149, 1) 0%,
    rgba(17, 77, 131, 1) 48%,
    rgba(58, 5, 185, 1) 100%
  );
  background-attachment: fixed;
  overflow-x: hidden;
  overflow-y: auto;
}
.app {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
