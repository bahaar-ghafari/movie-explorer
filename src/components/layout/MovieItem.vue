<template>
  <div>
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholderImage'"
      :alt="movie.Title"
      class="w-full h-56 object-cover"
    />
    <div class="p-2">
      <h3 class="font-semibold text-lg text-gray-600 break-words max-w-full">
        {{ movie.Title }}
      </h3>
      <p class="text-sm text-gray-400">{{ movie.Year }}</p>
      <div class="flex justify-between">
        <router-link
          :to="`/movie${movie.imdbID}`"
          class="block hover:bg-blue-100 transition text-blue-600"
        >
          See Details
        </router-link>
        <FavoriteButton :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import type { Movie } from '@/types/movies'
import FavoriteButton from './FavoriteButton.vue'

export default defineComponent({
  name: 'MovieItem',
  components: {
    FavoriteButton,
  },
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
})
</script>

<style scoped>
.movie-item {
  transition: transform 0.3s;
}

.movie-item:hover {
  transform: scale(1.02);
}
</style>
