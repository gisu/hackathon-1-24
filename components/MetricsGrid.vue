<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
    <div v-for="metric in metrics" :key="metric.name" 
      class="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      <div class="flex items-center gap-4 mb-4">
        <component :is="metric.icon" class="h-8 w-8 text-purple-600" />
        <h3 class="text-lg font-semibold text-gray-900">{{ metric.name }}</h3>
      </div>
      <p class="text-gray-600">{{ metric.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { Gauge, Globe2, Zap, BarChart3 } from 'lucide-vue-next'

const metrics = [
  {
    name: 'Performance',
    description: 'Measure loading speed, time to interactive, and overall performance metrics.',
    icon: Gauge
  },
  {
    name: 'Global Reach',
    description: 'Test your site from multiple locations worldwide for consistent performance.',
    icon: Globe2
  },
  {
    name: 'Real-time Analysis',
    description: 'Get instant feedback on your website\'s performance and areas for improvement.',
    icon: Zap
  },
  {
    name: 'Detailed Reports',
    description: 'Receive comprehensive reports with actionable insights and recommendations.',
    icon: BarChart3
  }
]
</script>