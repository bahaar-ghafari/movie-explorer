<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    :class="[
      'block w-full px-4 py-2 text-base border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500',
      customClass,
    ]"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Enter text...',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement | null
      if (target) {
        this.$emit('update:modelValue', target.value)
      }
    },
  },
})
</script>
