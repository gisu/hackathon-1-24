<template>
  <div v-if="results" class="grid lg:grid-cols-2 gap-8">
    <!-- Left Column: Metrics -->
    <div class="space-y-8">
      <!-- Performance Metrics -->
      <div class="bg-white rounded-lg shadow-xl p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Performance Analysis</h2>
        <div class="grid gap-6">
          <div v-for="metric in performanceMetrics" :key="metric.name" 
            class="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <component :is="metric.icon" class="h-5 w-5 text-purple-600" />
                <h3 class="text-sm font-medium text-gray-800">{{ metric.name }}</h3>
              </div>
              <div class="text-2xl font-bold" :class="getScoreColor(metric.value)">
                {{ formatValue(metric.value) }}{{ metric.unit }}
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="h-full rounded-full transition-all duration-500"
                :class="getScoreBackgroundColor(metric.value)"
                :style="{ width: `${getPercentage(metric.value, metric.max)}%` }" />
            </div>
          </div>
        </div>
      </div>

      <!-- Resource Analysis -->
      <div class="bg-white rounded-lg shadow-xl p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Resource Analysis</h2>
        <div class="grid gap-6">
          <div v-for="resource in resourceMetrics" :key="resource.name"
            class="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div class="flex items-center gap-3 mb-2">
              <component :is="resource.icon" class="h-5 w-5 text-purple-600" />
              <h3 class="font-medium text-gray-800">{{ resource.name }}</h3>
            </div>
            <div class="text-2xl font-bold text-gray-900">
              {{ resource.value }}
              <span class="text-sm font-normal text-gray-600">{{ resource.unit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Registration Form -->
    <div class="lg:sticky lg:top-8 h-fit">
      <div class="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Unlock Premium Features</h2>
          <p class="text-gray-600">Get detailed insights and recommendations with our professional plans.</p>
        </div>

        <div class="space-y-6 mb-8">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle class="w-5 h-5 text-purple-600" />
            </div>
            <p class="text-gray-700">Advanced performance metrics</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle class="w-5 h-5 text-purple-600" />
            </div>
            <p class="text-gray-700">Continuous monitoring</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle class="w-5 h-5 text-purple-600" />
            </div>
            <p class="text-gray-700">Custom reporting</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle class="w-5 h-5 text-purple-600" />
            </div>
            <p class="text-gray-700">API integration</p>
          </div>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Start Your Trial
          </button>
        </form>

        <p class="mt-4 text-center text-sm text-gray-500">
          14-day trial, cancel anytime
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Gauge, Clock, Wifi, Zap, 
  FileDown, HardDrive,
  FileType, Code, Image,
  CheckCircle
} from 'lucide-vue-next'

const props = defineProps<{
  results: {
    data: {
      performance: {
        score: number
        loadTime: number
        ttfb: number
        speedIndex: number
      }
      resources: {
        totalFiles: number
        totalSize: string
        htmlSize: string
        cssSize: string
        jsSize: string
        imageSize: string
      }
    }
  }
}>()

const form = ref({
  name: '',
  email: ''
})

const performanceMetrics = computed(() => [
  {
    name: 'Performance Score',
    value: props.results.data.performance.score,
    max: 100,
    unit: '',
    icon: Gauge,
    description: 'Overall performance rating'
  },
  {
    name: 'Load Time',
    value: props.results.data.performance.loadTime,
    max: 5,
    unit: 's',
    icon: Clock,
    description: 'Total page load time'
  },
  {
    name: 'Speed Index',
    value: props.results.data.performance.speedIndex,
    max: 5,
    unit: 's',
    icon: Wifi,
    description: 'Visual loading speed'
  },
  {
    name: 'Time to First Byte',
    value: props.results.data.performance.ttfb,
    max: 2,
    unit: 's',
    icon: Zap,
    description: 'Server response time'
  }
])

const resourceMetrics = computed(() => [
  {
    name: 'Total Resources',
    value: props.results.data.resources.totalFiles,
    unit: 'files',
    icon: FileDown
  },
  {
    name: 'Total Size',
    value: props.results.data.resources.totalSize,
    unit: '',
    icon: HardDrive
  },
  {
    name: 'JavaScript Size',
    value: props.results.data.resources.jsSize,
    unit: '',
    icon: Code
  },
  {
    name: 'Media Size',
    value: props.results.data.resources.imageSize,
    unit: '',
    icon: Image
  }
])

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-green-600'
  if (score >= 50) return 'text-yellow-600'
  return 'text-red-600'
}

function getScoreBackgroundColor(score: number): string {
  if (score >= 90) return 'bg-green-500'
  if (score >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

function getPercentage(value: number, max: number): number {
  return Math.min((value / max) * 100, 100)
}

function formatValue(value: number): string {
  return typeof value === 'number' ? value.toFixed(1) : value.toString()
}

function handleRegister() {
  // Mock registration
  console.log('Registration submitted:', form.value)
  form.value = { name: '', email: '' }
  // Here you would typically make an API call to register the user
}
</script>