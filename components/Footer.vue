<template>
  <footer class="bg-purple-950 text-white py-16">
    <div class="container mx-auto px-4">
      <!-- Top Section -->
      <div class="flex flex-col lg:flex-row justify-between items-start mb-12">
        <!-- Logo and Description -->
        <div class="mb-8 lg:mb-0 max-w-md">
          <img 
            src="https://webpros.com/wp-content/uploads/2023/03/Webpros-negative.svg" 
            alt="WebPros" 
            class="h-8 w-auto mb-4"
          />
          <p class="text-gray-400 mb-4">
            Cross-platform, multi-functional, omni-channel.<br>
            Your web enablement ecosystem.
          </p>
          <!-- Social Links -->
          <div class="flex gap-4">
            <a href="https://linkedin.com/company/webpros" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin class="w-5 h-5" />
            </a>
            <a href="https://instagram.com/webpros" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="https://facebook.com/webpros" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/imprint" class="text-gray-400 hover:text-white transition-colors">Imprint</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/careers" class="text-gray-400 hover:text-white transition-colors">Careers</NuxtLink></li>
              <li><NuxtLink to="/offices" class="text-gray-400 hover:text-white transition-colors">Offices</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact us</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 border-t border-white/10">
        <p class="text-gray-400 text-sm">
          WebPros Investments S.à r.l. · 14, rue Robert Stumper · L-2557 Luxembourg · B241080 © {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Instagram, Facebook } from 'lucide-vue-next'
</script>