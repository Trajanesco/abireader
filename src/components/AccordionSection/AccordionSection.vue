<template>
  <Accordion :accordion-entries="[{ name: 'test' }, { name: 'test2' }]">
    <template #test>
      <p>TEST CONTENT</p>
    </template>
    <template #test2>
      <p>TEST 2 CONTENT</p>
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useFiles from '../../composables/useFiles';

const mapFile = (type: string) => {
  return useFiles()
    .getFiles()
    .map((entry) => entry.type === type);
};

const events = computed(() => mapFile('events'));

const functions = computed(() => {
  const functionsMapped = {
    view: [],
    payable: [],
    nonpayable: [],
    pure: []
  };
  mapFile('functions').forEach((entry) => functionsMapped['view'].push(entry));
});
</script>

<style scoped></style>
