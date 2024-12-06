import { ref } from 'vue'

interface AnalysisResults {
  success: boolean
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

export function usePerformanceAnalysis() {
  const url = ref('')
  const isLoading = ref(false)
  const error = ref('')
  const results = ref<AnalysisResults | null>(null)
  const showResults = ref(false)

  async function analyzeUrl(inputUrl: string, probeId: string) {
    error.value = ''
    isLoading.value = true
    results.value = null
    showResults.value = false
    
    try {
      // Mock analysis delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock results
      results.value = {
        success: true,
        data: {
          performance: {
            score: Math.floor(Math.random() * 30) + 70,
            loadTime: Number((Math.random() * 3 + 1).toFixed(2)),
            ttfb: Number((Math.random() * 0.5 + 0.1).toFixed(2)),
            speedIndex: Number((Math.random() * 2 + 2).toFixed(1))
          },
          resources: {
            totalFiles: Math.floor(Math.random() * 40) + 20,
            totalSize: `${(Math.random() * 3 + 1).toFixed(1)}MB`,
            htmlSize: `${Math.floor(Math.random() * 50) + 20}KB`,
            cssSize: `${Math.floor(Math.random() * 200) + 50}KB`,
            jsSize: `${(Math.random() * 1 + 0.5).toFixed(1)}MB`,
            imageSize: `${(Math.random() * 2 + 0.5).toFixed(1)}MB`
          }
        }
      }

      // Show results after a delay
      setTimeout(() => {
        showResults.value = true
      }, 500)

    } catch (e) {
      error.value = 'Failed to analyze the website. Please try again.'
      console.error('Analysis error:', e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    url,
    isLoading,
    error,
    results,
    showResults,
    analyzeUrl
  }
}