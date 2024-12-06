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
            Legal Notice
          </h1>

          <div class="space-y-12">
            <!-- Company Information -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">Company Information</h2>
              <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <Building2 class="w-8 h-8 text-purple-600 mb-4" />
                  <div class="space-y-2">
                    <p class="font-semibold text-gray-900">WebPros Investments S.à r.l.</p>
                    <p class="text-gray-600">14, rue Robert Stumper</p>
                    <p class="text-gray-600">L-2557 Luxembourg</p>
                    <p class="text-gray-600">Registration: B241080</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <Contact class="w-8 h-8 text-purple-600 mb-4" />
                  <div class="space-y-2">
                    <p class="font-semibold text-gray-900">Contact Information</p>
                    <p class="text-gray-600">Email: info@webpros.com</p>
                    <p class="text-gray-600">Phone: +352 000 000</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Management -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Management</h2>
              <div class="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <Users class="w-8 h-8 text-purple-600 mb-4" />
                <p class="text-gray-600">
                  Managing Directors: [Names of Managing Directors]
                </p>
              </div>
            </section>

            <!-- Legal Notices -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Legal Notices</h2>
              <div class="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <Scale class="w-8 h-8 text-purple-600 mb-4" />
                <div class="space-y-4 text-gray-600">
                  <p>
                    All content on this website is protected by copyright law. Any reproduction or use requires explicit permission from WebPros Investments S.à r.l.
                  </p>
                  <p>
                    The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability or availability of the information.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { Building2, Contact, Users, Scale } from 'lucide-vue-next'
</script>