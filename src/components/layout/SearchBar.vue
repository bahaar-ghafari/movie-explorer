<template>
  <div class="searchbar flex justify-center items-center gap-2 w-full">
    <InputField v-model="searchQuery" placeholder="Search for movies..." type="text" />

    <!-- TODO:use icon -->
    <CustomButton @click="handleSearch"> Search </CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputField from '@/components/base/InputField.vue'
import CustomButton from '@/components/base/CustomButton.vue'

export default defineComponent({
  name: 'SearchBar',
  components: { InputField, CustomButton },
  setup() {
    const searchQuery = ref('')

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        console.log(`Searching for: ${searchQuery.value}`)
      } else {
        // TODO:toast notification
        alert('Please enter a search query.')
      }
    }

    return { searchQuery, handleSearch }
  },
})
</script>
