<template>
  <MovieItem :movie="movie" v-for="movie in movies" :key="movie.imdbID" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Movie } from '@/types/movies'
import { useFavoritesStore } from '@/stores/favoritesStore'
import MovieItem from './MovieItem.vue'

export default defineComponent({
  name: 'MovieList',
  components: { MovieItem },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
  setup() {
    const favoritesStore = useFavoritesStore()

    return {
      toggleFavorite: favoritesStore.toggleFavorite,
      isFavorite: favoritesStore.isFavorite,
    }
  },
})
</script>
