<template>
  <button
    :type="type"
    :class="[
      'flex justify-center gap-2 px-4 py-2 font-medium bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed',
      customClass,
    ]"
    :disabled="disabled"
    @click="handleClick"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <slot name="iconBefore" />
    <slot />
    <slot name="iconAfter" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomButton',
  props: {
    type: {
      type: String as () => 'button' | 'submit' | 'reset',
      default: 'button',
    },
    customClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event: Event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
  },
})
</script>
