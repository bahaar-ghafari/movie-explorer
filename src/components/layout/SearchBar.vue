<template>
  <div class="flex justify-center w-full" role="search">
    <InputField
      v-model="searchQuery"
      placeholder="Search for movies..."
      type="text"
      @keydown.enter="handleSearch"
      aria-labelledby="search-label"
    />
    <CustomButton
      @click="handleSearch"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500px-4 py-2"
      aria-label="Search"
    >
      <SearchIcon />
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputField from '@/components/base/CustomInput.vue'
import CustomButton from '@/components/base/CustomButton.vue'
import SearchIcon from '@/assets/svg/SearchIcon.vue'
import { useToast } from 'vue-toastification'

export default defineComponent({
  name: 'SearchBar',
  components: { InputField, CustomButton, SearchIcon },
  emits: ['search'],
  setup(_, { emit }) {
    const searchQuery = ref('')
    const toast = useToast()

    const handleSearch = () => {
      if (searchQuery.value.trim().length > 2) {
        emit('search', searchQuery.value)
      } else {
        toast.info('Please enter at least 3 characters.')
      }
    }

    return { searchQuery, handleSearch }
  },
})
</script>
