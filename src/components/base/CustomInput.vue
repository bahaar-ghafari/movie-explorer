<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <input
      :id="id || undefined"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      :class="[
        'block w-full px-4 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        customClass,
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: {
    id: {
      type: String,
      required: false,
      validator(value, { label }) {
        if (label && !value) {
          console.warn('The "id" prop is required when a "label" is provided.')
          return false
        }
        return true
      },
    },
    label: {
      type: String,
      required: false,
    },
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
