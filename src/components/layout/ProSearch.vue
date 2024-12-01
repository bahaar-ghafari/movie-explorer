<template>
  <div class="p-4 bg-gray-100 rounded-md shadow-md relative">
    <CustomButton
      @click="onClose"
      class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition"
      aria-label="Close"
    >
      ✕
    </CustomButton>
    <h2 class="text-xl font-bold mb-4 text-gray-600">Advanced Search</h2>
    <form @submit.prevent="onSearch" class="grid gap-4">
      <CustomInput
        id="title"
        label="Title"
        v-model="filters.title"
        placeholder="Enter movie title"
      />
      <CustomInput
        id="year"
        label="Year"
        v-model="filters.year"
        placeholder="Enter release year"
        type="number"
      />
      <CustomSelect id="type" label="Type" v-model="filters.type" :options="typeOptions" />
      <div class="flex gap-4 mt-4">
        <CustomButton type="submit" customClass="bg-blue-600 text-white px-4 py-2 rounded-md">
          Search
        </CustomButton>
        <CustomButton
          type="button"
          @click="onReset"
          customClass="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Reset
        </CustomButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomInput from '@/components/base/CustomInput.vue'
import CustomSelect from '@/components/base/CustomSelect.vue'
import CustomButton from '@/components/base/CustomButton.vue'

export default defineComponent({
  name: 'ProSearch',
  components: { CustomInput, CustomSelect, CustomButton },
  emits: ['search', 'reset', 'close'],
  setup(_, { emit }) {
    const filters = ref({
      title: '',
      year: '',
      type: '',
    })

    const typeOptions = [
      { label: 'All', value: '' },
      { label: 'Movie', value: 'movie' },
      { label: 'Series', value: 'series' },
      { label: 'Episode', value: 'episode' },
    ]

    const onSearch = () => {
      emit('search', filters.value)
    }

    const onReset = () => {
      filters.value = {
        title: '',
        year: '',
        type: '',
      }
    }

    const onClose = () => {
      emit('close')
    }

    return {
      filters,
      typeOptions,
      onSearch,
      onReset,
      onClose,
    }
  },
})
</script>

<style scoped>
button[aria-label='Close'] {
  background: none;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
}
</style>
