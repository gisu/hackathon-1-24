<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
    <Header />
    <main class="relative">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,#4c1d95,transparent)] opacity-50"></div>
      
      <!-- Content -->
      <div class="relative container mx-auto px-4 py-32">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>

          <div class="prose prose-lg max-w-none">
            <div class="space-y-12">
              <!-- Introduction -->
              <section>
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p class="text-gray-600">
                  This Privacy Policy explains how WebPros ("we," "our," or "us") collects, uses, and protects your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and maintained at all times.
                </p>
              </section>

              <!-- Information Collection -->
              <section>
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <p class="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Check class="w-4 h-4 text-purple-600" />
                    </div>
                    <span>Contact information (name, email address, phone number)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Check class="w-4 h-4 text-purple-600" />
                    </div>
                    <span>Account information and preferences</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Check class="w-4 h-4 text-purple-600" />
                    </div>
                    <span>Usage data and analytics information</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Check class="w-4 h-4 text-purple-600" />
                    </div>
                    <span>Technical information about your device and browser</span>
                  </li>
                </ul>
              </section>

              <!-- Information Usage -->
              <section>
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p class="text-gray-600 mb-4">We use the collected information to:</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">Service Improvement</h3>
                    <p class="text-gray-600">Enhance and optimize our services based on your usage patterns and feedback</p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">Communication</h3>
                    <p class="text-gray-600">Send you important updates, newsletters, and promotional content</p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p class="text-gray-600">Analyze website performance and user behavior to improve experience</p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 class="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                    <p class="text-gray-600">Ensure compliance with applicable laws and regulations</p>
                  </div>
                </div>
              </section>

              <!-- Data Protection -->
              <section>
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection</h2>
                <p class="text-gray-600">
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                </p>
                <ul class="mt-4 space-y-2 text-gray-600">
                  <li class="flex items-start gap-3">
                    <Shield class="w-5 h-5 text-purple-600 mt-1" />
                    <span>Encryption of personal data during transmission</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Lock class="w-5 h-5 text-purple-600 mt-1" />
                    <span>Secure storage with restricted access</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <RefreshCw class="w-5 h-5 text-purple-600 mt-1" />
                    <span>Regular security assessments and updates</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { Check, Shield, Lock, RefreshCw } from 'lucide-vue-next'
</script>