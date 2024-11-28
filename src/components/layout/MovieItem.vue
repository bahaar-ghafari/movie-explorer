<template>
  <li class="border rounded-lg shadow-md overflow-hidden relative bg-white">
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholderImage'"
      :alt="movie.Title"
      class="w-full h-56 object-cover"
    />
    <div class="p-2">
      <div class="grid grid-cols-[4fr_1fr]">
        <h3 class="font-semibold text-lg text-gray-600 break-words max-w-full">
          {{ movie.Title }}
        </h3>
        <FavoriteButton :movie="movie" />
      </div>

      <p class="text-sm text-gray-400">{{ movie.Year }}</p>
      <router-link
        :to="`/movie/${movie.imdbID}`"
        class="block hover:bg-blue-100 transition text-blue-600"
      >
        See Details
      </router-link>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
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
