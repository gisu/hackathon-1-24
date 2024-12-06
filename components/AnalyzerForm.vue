<template>
  <div class="bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden pt-24">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#4c1d95,transparent)]"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJkb3RzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==');"></div>
    </div>
    
    <div class="relative container mx-auto px-4 py-20">
      <!-- Updated headline with white text and animated gradients -->
      <h1 class="text-center mb-12">
        <div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span class="text-white">Use the</span>
          <span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text"> power of</span>
        </div>
        <div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
          <span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text">website speed</span>
        </div>
        <div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
          <span class="text-white">to drive more</span>
          <span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text"> sales</span>
        </div>
        <p v-if="!showResults" class="text-xl md:text-2xl text-gray-300 mt-8">
          Want to test your website's performance? Enter your URL below.
        </p>
      </h1>

      <!-- Analysis Form -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <form v-if="!showResults" @submit.prevent="handleSubmit" class="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            v-model="url"
            type="url"
            placeholder="www.yoursite.com"
            class="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :disabled="isLoading"
            required
          />
          
          <LocationSelect
            v-model="selectedLocation"
            :disabled="isLoading"
          />

          <button
            type="submit"
            class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none min-w-[160px] overflow-hidden"
            :disabled="isLoading || !url || !selectedLocation"
          >
            <!-- Button shine effect -->
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <!-- Button content with loading state -->
            <span class="relative flex items-center justify-center gap-2">
              <Loader2 v-if="isLoading" class="h-5 w-5 animate-spin" />
              <Zap v-else class="h-5 w-5" />
              {{ isLoading ? 'Analyzing...' : 'Test Now' }}
            </span>
          </button>
        </form>
      </Transition>

      <!-- Error message -->
      <div v-if="error" class="mt-4 text-center text-red-400 animate-fade-in">
        {{ error }}
      </div>

      <!-- Results Section -->
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div v-if="showResults && results" class="mt-12">
          <AnalysisResults :results="results" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Loader2, Zap } from 'lucide-vue-next'
import { usePerformanceAnalysis } from '~/composables/usePerformanceAnalysis'

const {
  url,
  isLoading,
  error,
  results,
  showResults,
  analyzeUrl
} = usePerformanceAnalysis()

const selectedLocation = ref('')

async function handleSubmit() {
  if (!url.value || !selectedLocation.value) return
  await analyzeUrl(url.value, selectedLocation.value)
}
</script>

<style>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>