<template>
  <div class="bg-white py-24">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">
        Providing The Foundation That Supports Your Digital Business
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.title" class="p-6 rounded-lg bg-white shadow-lg border border-gray-100">
          <component :is="feature.icon" class="h-12 w-12 text-purple-600 mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Target, Eye, Atom, Rocket } from 'lucide-vue-next'

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower your business to build, operate, and grow with our web enablement ecosystem.'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To inspire and enable web professionals by providing lasting innovation to build their digital future.'
  },
  {
    icon: Atom,
    title: 'Our Values',
    description: 'We are guided by a customer-focused outlook, by innovation, and by a passion to succeed.'
  },
  {
    icon: Rocket,
    title: 'Our Promise',
    description: 'From server management to automation, website building, and SEO; we support your success online.'
  }
]
</script>