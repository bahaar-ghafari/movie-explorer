<template>
  <div class="flex justify-center items-center" role="status" aria-label="Loading">
    <div
      :class="[
        'animate-spin rounded-full border-t-4 border-solid',
        `h-${size} w-${size} border-t-${thickness} border-${color}`,
      ]"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'LoadingSpinner',
  props: {
    size: {
      type: Number,
      default: 8,
    },
    thickness: {
      type: Number,
      default: 4,
    },
    color: {
      type: String,
      default: 'blue-500',
    },
  },
})
</script>
