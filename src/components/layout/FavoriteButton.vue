<template>
  <CustomButton class="bg-transparent h-fit" @click="toggleFavorite(movie)">
    <HeartIcon :filled="isFavorite(movie.imdbID)" />
  </CustomButton>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import type { Movie } from '@/types/movies'
import CustomButton from '../base/CustomButton.vue'
import HeartIcon from '@/assets/svg/HeartIcon.vue'

export default defineComponent({
  name: 'FavoriteButton',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  components: { CustomButton, HeartIcon },
  setup() {
    const favoritesStore = useFavoritesStore()

    return {
      toggleFavorite: favoritesStore.toggleFavorite,
      isFavorite: favoritesStore.isFavorite,
    }
  },
})
</script>
