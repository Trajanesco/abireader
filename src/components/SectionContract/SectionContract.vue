<template>
  <section class="section-contract">
    <div class="flex justify-between items-center">
      <div class="flex justify-between items-center">
        <h3 class="title-contract">Constructor</h3>
        <div
          v-if="constructor && constructor.stateMutability"
          :class="['state-mutability', constructor.stateMutability]"
        >
          {{ constructor.stateMutability }}
        </div>
      </div>
      <slot></slot>
    </div>
    <template v-if="constructor">
      <div class="constructor">
        {{ constructor }}
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useFiles from '../../composables/useFiles';

const constructor = computed(
  () =>
    useFiles()
      .getFiles()
      ?.find((item) => item.type === 'constructor') || null
);
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
</style>
