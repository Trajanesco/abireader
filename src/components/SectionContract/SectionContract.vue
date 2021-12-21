<template>
  <section class="section-contract">
    <div class="flex justify-between items-center">
      <div class="flex justify-between items-center">
        <h3 class="title-contract">Constructor</h3>

        <div
          v-if="constructor.stateMutability"
          :class="['state-mutability', constructor.stateMutability]"
        >
          {{ constructor.stateMutability }}
        </div>
      </div>
      <slot></slot>
    </div>
    <template v-if="constructor.inputs">
      <div class="constructor">
        <ul>
          <li
            v-for="(item, index) in constructor.inputs"
            :key="`index-${index}-constructor-type`"
            class="constructor-li"
          >
            <div
              v-for="(value, key) in Object.keys(item)"
              :key="`${key}-${index}`"
            >
              <div v-if="index === 0">{{ capitalize(value) }}</div>
              {{ item[value] }}
            </div>
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import useFiles from '../../composables/useFiles';
import { AbiEntry, AbiEntryType } from '../../api/types';
import capitalize from '../../utils/capitalize';

const constructor: AbiEntry = useFiles().mapFile(AbiEntryType.constructor)[0];
</script>

<style scoped lang="scss">
.section-contract {
  max-width: 500px;
}
.title-contract {
  font-size: 1.5rem;
  font-weight: 300;
}
.constructor {
  margin-top: var(--base-space-2x);
  background-color: var(--main-color);
  padding: var(--base-space) var(--base-space-2x);
  border-radius: var(--base-radius);
  box-shadow: var(--box-shadow-optimized);
}
.state-mutability {
  padding: var(--base-space) var(--base-space-2x);
  border-radius: var(--base-radius);
  box-shadow: var(--box-shadow-optimized);
  text-transform: capitalize;
  margin-left: var(--base-space-2x);
  &.nonpayable {
    background-color: var(--purple);
  }
  &.payable {
    background-color: var(--green);
  }
}

.constructor-li {
  display: grid;
  grid-template-columns: 33.333% 33.3333% 1fr;
  grid-gap: var(--base-space-2x);
}
</style>
