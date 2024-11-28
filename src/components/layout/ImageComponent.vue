<template>
  <div class="relative flex items-center justify-center bg-gray-100" :class="containerClass">
    <img
      v-if="isImageLoaded"
      :src="src !== 'N/A' ? src : ''"
      :alt="alt"
      :class="['absolute inset-0 w-full h-full object-cover', customClass]"
      @error="onError"
      role="img"
      loading="lazy"
    />
    <NoImageIcon v-else :size="fallbackSize" :color="fallbackColor" class="absolute" />
  </div>
</template>

<script lang="ts">
import NoImageIcon from '@/assets/svg/NoImageIcon.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ImageComponent',
  components: { NoImageIcon },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Image',
    },
    fallbackSize: {
      type: [String, Number],
      default: 50,
    },
    fallbackColor: {
      type: String,
      default: '#cccccc',
    },
    customClass: {
      type: String,
      default: '',
    },
    containerClass: {
      type: String,
      default: 'w-full h-56',
    },
  },
  setup() {
    const isImageLoaded = ref(true)

    const onError = () => {
      isImageLoaded.value = false
    }

    return {
      isImageLoaded,
      onError,
    }
  },
})
</script>
