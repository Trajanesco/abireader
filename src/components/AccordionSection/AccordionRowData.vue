<template>
  <table>
    <thead>
      <tr>
        <template v-for="header in headers">
          <th v-if="['inputs', 'outputs'].includes(header)">
            <p>{{ header }}</p>
            <div class="flex justify-between">
              <p v-for="ioHeader in ioHeaders">
                {{ ioHeader }}
              </p>
            </div>
          </th>
          <th v-else>
            {{ header }}
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in dataItems" :key="`${index}__row`">
        <template v-for="(value, key) in row">
          <td v-if="['inputs', 'outputs'].includes(key)" :key="`${index}__row__${key}`">
            <div v-for="ioEntry in valueAsIOEntryList(value)" class="flex justify-between">
              <p v-for="(ioValue, ioKey) of ioEntry">
                {{ ioValue }}
              </p>
            </div>
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
import {AbiEntry, IOEntry} from '../../api/types';
import { computed } from 'vue';
import IOEntryTable from './IOEntryTable.vue';

const props = defineProps({
  dataItems: {
    required: true,
    type: Array as () => AbiEntry[]
  }
});

const ioHeaders = ['internalType', 'name', 'type'];

const headers = computed(() => Object.keys(props.dataItems[0]));

const valueAsIOEntryList = (items: any): IOEntry[] => (items as IOEntry[]);
</script>

<style scoped></style>
