<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <select
      :id="id"
      :value="modelValue"
      @change="onSelect"
      class="mt-1 block w-full text-gray-600 border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface Option {
  label: string
  value: string
}

export default defineComponent({
  name: 'CustomSelect',
  props: {
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onSelect(event: Event) {
      const target = event.target as HTMLSelectElement | null
      if (target) {
        this.$emit('update:modelValue', target.value)
      }
    },
  },
})
</script>
