<template>
  <!-- add skeleton -->
  <div v-if="isLoading" class="text-blue-500">Loading movie details...</div>
  <!-- add toast -->
  <div v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  <div v-else-if="movieDetails" class="p-4">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- TODO:placeholderImage -->
      <img
        :src="movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'placeholderImage'"
        :alt="movieDetails.Title"
        class="w-full md:w-1/3 object-cover"
      />
      <div>
        <h2 class="text-2xl font-bold">{{ movieDetails.Title }}</h2>
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

export default defineComponent({
  name: 'MovieDetails',
  setup() {
    const route = useRoute()

    const { movieDetails, isLoading, errorMessage, fetchMovieDetails } = useMovieDetails()

    onMounted(() => {
      const imdbID = route.params.id as string
      if (imdbID) {
        fetchMovieDetails(imdbID)
      }
    })

    return { movieDetails, isLoading, errorMessage }
  },
})
</script>
