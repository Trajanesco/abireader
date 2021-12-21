<template>
  <div class="accordion-wrapper">
    <template
      v-for="(accordionEntry, index) in accordionEntries"
      :key="`accordion_entry_${index}`"
    >
      <div class="accordion-item">
        <button
          :ref="
            (el) => {
              accordionItems[index] = el;
            }
          "
          class="accordion-opener"
          @click="setActiveItem(index)"
        >
          {{ accordionEntry.name }}
        </button>
        <div class="accordion-item-content">
          <slot :name="accordionEntry.name" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  name: 'Accordion',
  setup() {
    const accordionItems = ref([] as HTMLElement[]);

    return {
      accordionItems: accordionItems.value
    };
  },
  props: {
    accordionEntries: {
      //Temporary for testing, will be changed to proper type
      type: Array as () => any[],
      required: true
    }
  },
  data() {
    return {
      activeItem: -1
    };
  },
  methods: {
    setActiveItem(itemIndex: number) {
      if (
        itemIndex !== Number(this.activeItem) &&
        Number(this.activeItem) > -1
      ) {
        const previousActive = this.accordionItems[this.activeItem];
        this.toggleItemOpenState(previousActive);
      }
      this.activeItem = itemIndex === Number(this.activeItem) ? -1 : itemIndex;
      const newItem = this.accordionItems[itemIndex];
      this.toggleItemOpenState(newItem);
    },
    toggleItemOpenState(payload: HTMLElement) {
      const content = payload.nextElementSibling as HTMLElement;

      if (content && content.style.maxHeight) {
        content.style.maxHeight = '';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  }
});
</script>

<style scoped lang="scss">
.accordion {
  &-wrapper {
    width: 100%;
    max-width: 1240px;
  }
  &-item {
    @apply my-2;
    &-content {
      background-color: #023047;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-in-out, padding 0.2s ease-in-out;
    }
  }
  &-opener {
    width: 100%;
  }
}
</style>
