<template>
  <header
    class="flex items-center justify-between rounded-t-md p-4 bg-gray-800 text-white shadow-md"
  >
    <h1 class="text-lg font-bold">Movie Explorer</h1>
    <nav class="flex items-center gap-4">
      <CustomButton
        @click="sortMovies"
        customClass="bg-white text-blue-900 hover:bg-sky-200 px-4 rounded-md"
      >
        Sort by {{ selectedSort === 'title' ? 'Year' : 'Title' }}
      </CustomButton>
      <CustomButton
        @click="toggleProSearch"
        customClass="bg-white text-blue-900 hover:bg-sky-200 px-4 rounded-md"
      >
        Pro Search
      </CustomButton>
      <router-link to="/favorites" class="relative hover:text-gray-300">
        <HeartIcon :filled="true" />
        <span
          v-if="favoriteCount > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
        >
          {{ favoriteCount }}
        </span>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import CustomButton from '@/components/base/CustomButton.vue'
import HeartIcon from '@/assets/svg/HeartIcon.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { CustomButton, HeartIcon },
  emits: ['toggleProSearch', 'sort'],
  props: {
    selectedSort: {
      type: String as () => 'title' | 'year',
      default: 'title',
    },
  },
  setup(_, { emit }) {
    const favoritesStore = useFavoritesStore()

    const toggleProSearch = () => {
      emit('toggleProSearch')
    }

    const sortMovies = () => {
      emit('sort')
    }

    return {
      favoriteCount: favoritesStore.favorites.length,
      toggleProSearch,
      sortMovies,
    }
  },
})
</script>

<style scoped>
header {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
