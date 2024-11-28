<template>
  <div class="flex justify-center w-full">
    <InputField
      v-model="searchQuery"
      placeholder="Search for movies..."
      type="text"
      @keydown.enter="handleSearch"
    />
    <CustomButton @click="handleSearch" class="text-white"> Search </CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputField from '@/components/base/CustomInput.vue'
import CustomButton from '@/components/base/CustomButton.vue'

export default defineComponent({
  name: 'SearchBar',
  components: { InputField, CustomButton },
  emits: ['search'],
  setup(_, { emit }) {
    const searchQuery = ref('')

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        emit('search', searchQuery.value)
      }
    }

    return { searchQuery, handleSearch }
  },
})
</script>
