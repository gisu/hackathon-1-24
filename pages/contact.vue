<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
    <Header />
    <main class="relative">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,#4c1d95,transparent)] opacity-50"></div>
      
      <!-- Content -->
      <div class="relative container mx-auto px-4 py-32">
        <div class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Talk
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our services? We're here to help you optimize your website's performance.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="firstName" class="text-sm font-medium text-gray-700">First Name</label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="lastName" class="text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label for="subject" class="text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="performance">Website Performance</option>
                    <option value="pricing">Pricing & Plans</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  :disabled="isSubmitting"
                >
                  <span class="flex items-center justify-center gap-2">
                    <Loader2 v-if="isSubmitting" class="w-5 h-5 animate-spin" />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </span>
                </button>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <!-- Office Locations -->
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="flex items-center gap-3 mb-6">
                  <Building2 class="w-6 h-6 text-purple-300" />
                  <h2 class="text-2xl font-bold text-white">Our Offices</h2>
                </div>
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <MapPin class="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
                    <div>
                      <h3 class="font-semibold text-white mb-1">Luxembourg (HQ)</h3>
                      <p class="text-gray-300">14, rue Robert Stumper<br>L-2557 Luxembourg</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Methods -->
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="flex items-center gap-3 mb-6">
                  <Phone class="w-6 h-6 text-purple-300" />
                  <h2 class="text-2xl font-bold text-white">Contact Methods</h2>
                </div>
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <Mail class="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
                    <div>
                      <h3 class="font-semibold text-white mb-1">Email Us</h3>
                      <a href="mailto:info@webpros.com" class="text-purple-300 hover:text-white transition-colors">
                        info@webpros.com
                      </a>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <Clock class="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
                    <div>
                      <h3 class="font-semibold text-white mb-1">Business Hours</h3>
                      <p class="text-gray-300">Monday - Friday<br>9:00 AM - 6:00 PM CET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Building2, MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-vue-next'

const isSubmitting = ref(false)
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

async function handleSubmit() {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
}
</script>