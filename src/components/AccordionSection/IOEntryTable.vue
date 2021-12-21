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
      <tr v-for="(row, index) in tableItems">
        <td v-for="(value, key) in row">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { IOEntry } from '../../api/types';

const headers = ['internalType', 'name', 'type'];
const props = defineProps({
  tableItems: {
    type: Array as () => IOEntry[],
    required: true
  }
});
</script>

<style scoped></style>
