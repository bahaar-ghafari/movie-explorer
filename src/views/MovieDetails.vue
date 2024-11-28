<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else-if="movieDetails" class="p-4">
    <div class="flex flex-col md:flex-row gap-4">
      <img
        :src="movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'placeholderImage'"
        :alt="movieDetails.Title"
        class="w-full md:w-1/3 object-cover rounded shadow"
      />
      <div class="flex-1">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold text-gray-800">{{ movieDetails?.Title }}</h1>
          <FavoriteButton :movie="movieDetails" />
        </div>
        <p class="text-sm text-gray-500 mb-2">{{ movieDetails.Year }}</p>
        <p class="mb-4"><strong>Genre:</strong> {{ movieDetails.Genre }}</p>
        <p class="mb-4"><strong>Director:</strong> {{ movieDetails.Director }}</p>
        <p class="mb-4"><strong>Writer:</strong> {{ movieDetails.Writer }}</p>
        <p class="mb-4"><strong>Actors:</strong> {{ movieDetails.Actors }}</p>
        <p class="mb-4"><strong>Language:</strong> {{ movieDetails.Language }}</p>
        <p class="mb-4"><strong>Country:</strong> {{ movieDetails.Country }}</p>
        <p class="mb-4"><strong>Awards:</strong> {{ movieDetails.Awards }}</p>
        <p class="mb-4"><strong>Plot:</strong> {{ movieDetails.Plot }}</p>
        <div v-if="movieDetails.Ratings.length > 0" class="mb-4">
          <h2 class="text-lg font-semibold mb-2">Ratings</h2>
          <ul>
            <li
              v-for="rating in movieDetails.Ratings"
              :key="rating.Source"
              class="text-sm text-gray-600"
            >
              <strong>{{ rating.Source }}:</strong> {{ rating.Value }}
            </li>
          </ul>
        </div>
        <div class="mt-4 text-sm text-gray-600 space-y-2">
          <p v-if="movieDetails.Metascore !== 'N/A'">
            <strong>Metascore:</strong> {{ movieDetails.Metascore }}
          </p>
          <p v-if="movieDetails.imdbRating !== 'N/A'">
            <strong>IMDb Rating:</strong> {{ movieDetails.imdbRating }}
          </p>
          <p v-if="movieDetails.imdbVotes !== 'N/A'">
            <strong>IMDb Votes:</strong> {{ movieDetails.imdbVotes }}
          </p>
          <p v-if="movieDetails.Runtime !== 'N/A'">
            <strong>Runtime:</strong> {{ movieDetails.Runtime }}
          </p>
          <p v-if="movieDetails.totalSeasons">
            <strong>Total Seasons:</strong> {{ movieDetails.totalSeasons }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-gray-500 text-center mt-8">No details available.</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieDetails } from '@/composables/useMovieDetails'
import FavoriteButton from '@/components/layout/FavoriteButton.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'

export default defineComponent({
  name: 'MovieDetails',
  components: { FavoriteButton, LoadingSpinner },
  setup() {
    const route = useRoute()
    const { movieDetails, isLoading, fetchMovieDetails } = useMovieDetails()

    onMounted(() => {
      const imdbID = route.params.id as string
      if (imdbID) fetchMovieDetails({ imdbID })
    })

    return { movieDetails, isLoading }
  },
})
</script>

<style scoped>
img {
  max-height: 300px;
}
</style>
