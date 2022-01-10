<template>
  <div>
    <Button icon-left="upload" @click="inputFile.click()">
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
import {ref} from "vue";

// FIXME: typescript
const emit = defineEmits<{
  (name: 'loading', value: boolean): void;
  (name: 'files', value: Array<any>): void;
}>();

const inputFile = ref({} as HTMLInputElement);

const handleFile = (event: Event) => {
  emit('loading', true);

  if (event.target && (event.target as HTMLInputElement).files!.length) {
    const file = (event.target as HTMLInputElement).files![0];
    const worker = new Worker('worker.js');
    worker.postMessage(file);

    worker.onmessage = function (event: MessageEvent) {
      console.log('result from loader', event);
      useFiles().setFiles(event.data);
      emit('loading', false);
    };
  }
};
</script>

<style scoped></style>
