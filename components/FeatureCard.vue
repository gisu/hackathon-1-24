<template>
  <div class="bg-white/5 border-white/10 rounded-lg p-6">
    <div class="mb-6">
      <component :is="icon" class="h-12 w-12 text-purple-400" />
    </div>
    <h3 class="text-xl font-semibold text-white mb-3">{{ title }}</h3>
    <p class="text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>