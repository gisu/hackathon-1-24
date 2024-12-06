<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <AnalyzerForm />
      <div class="container mx-auto px-4 py-12">
        <MetricsGrid />
        <AnalysisResults v-if="results" :results="results" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { usePerformanceAnalysis } from '~/composables/usePerformanceAnalysis'

const { results } = usePerformanceAnalysis()
</script>