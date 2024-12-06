<template>
  <div class="w-full max-w-2xl mx-auto">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="relative">
        <input 
          v-model="url"
          type="url"
          placeholder="Enter your website URL to analyze" 
          class="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          :disabled="isLoading"
        />
        <div v-if="error" class="absolute -bottom-6 left-0 text-sm text-red-400">
          {{ error }}
        </div>
      </div>
      
      <button 
        type="submit"
        class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        :disabled="isLoading"
      >
        <Loader2 v-if="isLoading" class="h-5 w-5 animate-spin" />
        <Gauge v-else class="h-5 w-5" />
        {{ isLoading ? 'Analyzing...' : 'Analyze Performance' }}
      </button>
    </form>

    <AnalysisResults :results="results" />
  </div>
</template>

<script setup lang="ts">
import { Gauge, Loader2 } from 'lucide-vue-next'
import { usePerformanceAnalysis } from '~/composables/usePerformanceAnalysis'

const {
  url,
  isLoading,
  error,
  results,
  analyzeUrl
} = usePerformanceAnalysis()

async function handleSubmit() {
  if (!url.value) return
  await analyzeUrl(url.value)
}
</script>