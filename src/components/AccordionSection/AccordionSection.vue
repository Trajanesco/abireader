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
      <AccordionRowData :data-items="functions.nonpayable" />
    </template>
    <template #payable>
      <AccordionRowData :data-items="functions.payable" />
    </template>
    <template #view>
      <AccordionRowData :data-items="functions.view" />
    </template>
    <template #pure>
      <AccordionRowData :data-items="functions.pure" />
    </template>
    <template #events>
      <AccordionRowData :data-items="events" />
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from '../../components/Accordion.vue';
import AccordionRowData from '../../components/AccordionSection/AccordionRowData.vue';
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
