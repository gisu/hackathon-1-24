import { _ as __nuxt_component_0, a as _sfc_main$1 } from "./Footer-C_nFNRxo.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Check, Shield, Lock, RefreshCw } from "lucide-vue-next";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "./nuxt-link-B2eMa8L8.js";
const _sfc_main = {
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="relative"><div class="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,#4c1d95,transparent)] opacity-50"></div><div class="relative container mx-auto px-4 py-32"><div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"><h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8"> Privacy Policy </h1><div class="prose prose-lg max-w-none"><div class="space-y-12"><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2><p class="text-gray-600"> This Privacy Policy explains how WebPros (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and maintained at all times. </p></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2><p class="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p><ul class="space-y-2 text-gray-600"><li class="flex items-start gap-3"><div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-purple-600" }, null, _parent));
      _push(`</div><span>Contact information (name, email address, phone number)</span></li><li class="flex items-start gap-3"><div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-purple-600" }, null, _parent));
      _push(`</div><span>Account information and preferences</span></li><li class="flex items-start gap-3"><div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-purple-600" }, null, _parent));
      _push(`</div><span>Usage data and analytics information</span></li><li class="flex items-start gap-3"><div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">`);
      _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-purple-600" }, null, _parent));
      _push(`</div><span>Technical information about your device and browser</span></li></ul></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2><p class="text-gray-600 mb-4">We use the collected information to:</p><div class="grid md:grid-cols-2 gap-4"><div class="p-4 bg-gray-50 rounded-lg border border-gray-100"><h3 class="font-semibold text-gray-900 mb-2">Service Improvement</h3><p class="text-gray-600">Enhance and optimize our services based on your usage patterns and feedback</p></div><div class="p-4 bg-gray-50 rounded-lg border border-gray-100"><h3 class="font-semibold text-gray-900 mb-2">Communication</h3><p class="text-gray-600">Send you important updates, newsletters, and promotional content</p></div><div class="p-4 bg-gray-50 rounded-lg border border-gray-100"><h3 class="font-semibold text-gray-900 mb-2">Analytics</h3><p class="text-gray-600">Analyze website performance and user behavior to improve experience</p></div><div class="p-4 bg-gray-50 rounded-lg border border-gray-100"><h3 class="font-semibold text-gray-900 mb-2">Legal Compliance</h3><p class="text-gray-600">Ensure compliance with applicable laws and regulations</p></div></div></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection</h2><p class="text-gray-600"> We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including: </p><ul class="mt-4 space-y-2 text-gray-600"><li class="flex items-start gap-3">`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-5 h-5 text-purple-600 mt-1" }, null, _parent));
      _push(`<span>Encryption of personal data during transmission</span></li><li class="flex items-start gap-3">`);
      _push(ssrRenderComponent(unref(Lock), { class: "w-5 h-5 text-purple-600 mt-1" }, null, _parent));
      _push(`<span>Secure storage with restricted access</span></li><li class="flex items-start gap-3">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "w-5 h-5 text-purple-600 mt-1" }, null, _parent));
      _push(`<span>Regular security assessments and updates</span></li></ul></section></div></div></div></div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-policy-DJw6c_mP.js.map
