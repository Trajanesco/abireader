<template>
  <button class="app-button">
    <font-awesome-icon
      v-if="iconLeft"
      class="app-button__icon left"
      icon="upload"
    />
    <slot />
    <font-awesome-icon
      v-if="iconRight"
      class="app-button__icon right"
      icon="upload"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  iconLeft: {
    default: '',
    required: false,
    type: String
  },
  iconRight: {
    default: '',
    required: false,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.app-button {
  border: 2px solid transparent;
  border-radius: var(--base-radius);
  padding: var(--base-space) var(--base-space-2x);
  display: flex;
  align-items: center;
  background: var(--main-color);
  color: var(--green-light);
  box-shadow: var(--box-shadow-optimized);
  transition: 0.2s outline cubic-bezier(0.3, 0.34, 0.53, 0.76),
    0.2s transform cubic-bezier(0.3, 0.34, 0.53, 0.76);

  &:active {
    transform: scale(0.95);
  }

  &__icon {
    &.left {
      margin-right: var(--base-space-2x);
    }
    &.right {
      margin-left: var(--base-space-2x);
    }
  }
}
</style>
