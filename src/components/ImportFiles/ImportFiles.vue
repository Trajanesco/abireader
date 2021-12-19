<template>
  <div>
    <Button icon-left="upload" @click="$refs.inputFile.click()">
      <slot name="button-title" />
    </Button>
    <input
      ref="inputFile"
      type="file"
      class="hidden"
      @change="handleFile"
      accept="application/json"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from '../Button.vue';
import useFiles from '../../composables/useFiles';

// FIXME: typescript
const emit = defineEmits<{
  (name: 'loading', value: boolean): void;
  (name: 'files', value: Array<any>): void;
}>();

const handleFile = (event: Event) => {
  emit('loading', true);

  const file = event.target.files[0];
  const worker = new Worker('worker.js');
  worker.postMessage(file);

  worker.onmessage = function (event: MessageEvent) {
    console.log('result from loader', event);
    useFiles().setFiles(event.data);
    emit('loading', false);
  };
};
</script>

<style scoped></style>
