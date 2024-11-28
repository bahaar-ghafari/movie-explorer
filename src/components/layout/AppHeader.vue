<template>
  <header
    class="flex items-center justify-between flex-wrap rounded-t-md p-4 bg-gray-800 text-white shadow-md"
    role="banner"
  >
    <h1 class="text-lg font-bold">Movie Explorer</h1>
    <CustomButton
      @click="toggleMenu"
      aria-expanded="isMenuOpen.toString()"
      aria-controls="main-navigation"
      class="block md:hidden bg-white text-blue-900 hover:bg-sky-200 px-4 rounded-md"
    >
      <MenuIcon />
    </CustomButton>
    <nav
      :id="'main-navigation'"
      :class="[
        'flex-col md:flex-row items-center gap-4 mt-4 md:mt-0',
        isMenuOpen ? 'flex' : 'hidden md:flex',
      ]"
      class="w-full md:w-auto"
      role="navigation"
    >
      <CustomButton
        @click="sortMovies"
        aria-label="Sort Movies"
        customClass="bg-white text-blue-900 hover:bg-sky-200 px-4 rounded-md"
      >
        Sort by {{ selectedSort === 'title' ? 'Year' : 'Title' }}
      </CustomButton>
      <CustomButton
        @click="toggleProSearch"
        aria-label="Pro Search"
        customClass="bg-white text-blue-900 hover:bg-sky-200 px-4 rounded-md"
      >
        Pro Search
      </CustomButton>
      <router-link to="/favorites" class="relative hover:text-gray-300" aria-label="Favorites">
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
import { ref, computed, defineComponent } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import CustomButton from '@/components/base/CustomButton.vue'
import HeartIcon from '@/assets/svg/HeartIcon.vue'
import MenuIcon from '@/assets/svg/MenuIcon.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { CustomButton, HeartIcon, MenuIcon },
  emits: ['toggleProSearch', 'sort'],
  props: {
    selectedSort: {
      type: String as () => 'title' | 'year',
      default: 'title',
    },
  },
  setup(_, { emit }) {
    const favoritesStore = useFavoritesStore()
    const favoriteCount = computed(() => favoritesStore.favorites.length)
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const toggleProSearch = () => {
      emit('toggleProSearch')
    }

    const sortMovies = () => {
      emit('sort')
    }

    return {
      favoriteCount,
      isMenuOpen,
      toggleMenu,
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
