<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in dataItems">
        <template v-for="(value, key) in row">
          <td v-if="['inputs', 'outputs'].includes(key)">
            <IOEntryTable :table-items="value" />
          </td>
          <td v-else>
            {{ value }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { AbiEntry } from '../../api/types';
import { computed } from 'vue';
import IOEntryTable from './IOEntryTable.vue';

const props = defineProps({
  dataItems: {
    required: true,
    type: Array as () => AbiEntry[]
  }
});

const headers = computed(() => Object.keys(props.dataItems[0]));
</script>

<style scoped></style>
