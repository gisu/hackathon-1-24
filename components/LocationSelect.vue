<template>
  <div class="relative w-full md:w-64">
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="w-full px-6 py-4 rounded-lg bg-white/10 border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer pr-12 transition-all hover:bg-white/20"
      :class="{ 'text-gray-400': !modelValue }"
      :disabled="disabled"
    >
      <option value="" disabled selected>Select location</option>
      <option v-for="location in locations" :key="location.value" :value="location.value">
        {{ location.label }}
      </option>
    </select>

    <!-- Custom dropdown indicator -->
    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <ChevronDown class="h-5 w-5 text-white/70" />
    </div>

    <!-- Location indicator when selected -->
    <div v-if="modelValue" class="absolute left-6 -top-2 px-2 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-xs font-medium rounded">
      Test Location
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface Location {
  value: string
  label: string
}

defineProps<{
  modelValue: string
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const locations: Location[] = [
  { value: '616441aff8e2232e0d58907f', label: 'New York, US' },
  { value: '61644bd8f8e2232e0d5893de', label: 'London, UK' },
  { value: '61644bdcf8e2232e0d5893e0', label: 'Paris, FR' },
  { value: '61644be3f0478a0c9846b771', label: 'Tokyo, JP' },
  { value: '616466aaba7169082b50723b', label: 'Singapore, SG' },
  { value: '60e81944f401963e610a0623', label: 'Nuremberg, DE' },
  { value: '61162c08cac0b5844220bbdc', label: 'Falkenstein, DE' },
  { value: '61162c38cac0b5844220bbdd', label: 'Falkenstein #2, DE' },
  { value: '61162c72cac0b5844220bbde', label: 'Falkenstein #3, DE' },
  { value: '61162d5acac0b5844220bbdf', label: 'Helsinki, FI' },
  { value: '616448a8ba7169082b506849', label: 'Los Angeles, US' },
  { value: '61644bc8f8e2232e0d5893aa', label: 'Atlanta, US' },
  { value: '61644bd3ba7169082b5069a8', label: 'Chicago, US' },
  { value: '61644bd7f0478a0c9846b751', label: 'Dallas, US' },
  { value: '61644bdcf8e2232e0d5893df', label: 'Mexico City, MX' },
  { value: '61644bdfba7169082b5069da', label: 'Silicon Valley, US' },
  { value: '6164669cf8e2232e0d589bc8', label: 'Toronto, CA' },
  { value: '616466a0f0478a0c9846be1b', label: 'Amsterdam, NL' },
  { value: '616466a3ba7169082b50723a', label: 'Miami, US' },
  { value: '616466a5f0478a0c9846be1c', label: 'Seattle, US' },
  { value: '616466aaf8e2232e0d589bc9', label: 'Stockholm, SE' },
  { value: '616466aeba7169082b50723c', label: 'Sydney, AU' },
  { value: '61fb935e26fcf0158b834562', label: 'Ashburn, US' }
]
</script>

<style scoped>
select {
  background-image: none;
}

/* Custom scrollbar for Webkit browsers */
select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Style for options */
select option {
  background-color: #1a1a1a;
  color: white;
  padding: 12px;
}

select option:hover {
  background-color: #2a2a2a;
}
</style>