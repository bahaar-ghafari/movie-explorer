<template>
  <!-- TODO:add skeleton -->
  <div v-if="isLoading" class="text-blue-500">Loading movie details...</div>
  <div v-else-if="movieDetails" class="p-4">
    <div class="flex gap-4">
      <!-- TODO:placeholderImage -->
      <img
        :src="movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'placeholderImage'"
        :alt="movieDetails.Title"
        class="w-full md:w-1/3 object-cover"
      />
      <div>
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">{{ movieDetails?.Title }}</h1>
          <FavoriteButton :movie="movieDetails" />
        </div>
        <p class="text-gray-600">{{ movieDetails.Year }}</p>
        <p><strong>Genre:</strong> {{ movieDetails.Genre }}</p>
        <p><strong>Director:</strong> {{ movieDetails.Director }}</p>
        <p><strong>Actors:</strong> {{ movieDetails.Actors }}</p>
        <p><strong>Plot:</strong> {{ movieDetails.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieDetails } from '@/composables/useMovieDetails'
import FavoriteButton from '@/components/layout/FavoriteButton.vue'

export default defineComponent({
  name: 'MovieDetails',
  components: { FavoriteButton },
  setup() {
    const route = useRoute()

    const { movieDetails, isLoading, fetchMovieDetails } = useMovieDetails()

    onMounted(() => {
      const imdbID = route.params.id as string
      if (imdbID) {
        fetchMovieDetails({ imdbID })
      }
    })

    return { movieDetails, isLoading }
  },
})
</script>
