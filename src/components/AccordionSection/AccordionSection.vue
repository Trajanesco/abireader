<template>
  <Accordion
    :accordion-entries="[
      { name: 'nonpayable' },
      { name: 'payable' },
      { name: 'view' },
      { name: 'pure' },
      { name: 'events' }
    ]"
  >
    <template #nonpayable>
      <p>{{ functions.nonpayable }}</p>
    </template>
    <template #payable>
      <p>{{ functions.payable }}</p>
    </template>
    <template #view>
      <p>{{ functions.view }}</p>
    </template>
    <template #pure>
      <p>{{ functions.pure }}</p>
    </template>
    <template #events>
      <p>{{ events }}</p>
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from '../../components/Accordion.vue';
import { computed } from 'vue';
import useFiles from '../../composables/useFiles';
import { AbiEntry, AbiEntryType, FunctionAbiEntry } from '../../api/types';

const events = computed(() => useFiles().mapFile(AbiEntryType.event));

const functions = computed(() => {
  const functionsMapped = {
    view: [] as FunctionAbiEntry[],
    payable: [] as FunctionAbiEntry[],
    nonpayable: [] as FunctionAbiEntry[],
    pure: [] as FunctionAbiEntry[]
  };
  useFiles()
    .mapFile(AbiEntryType.function)
    .forEach((entry: AbiEntry) => {
      functionsMapped[(entry as FunctionAbiEntry).stateMutability].push(
        entry as FunctionAbiEntry
      );
    });
  return functionsMapped;
});
</script>

<style scoped></style>
