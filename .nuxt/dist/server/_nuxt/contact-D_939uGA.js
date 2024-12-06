import { _ as __nuxt_component_0, a as _sfc_main$1 } from "./Footer-C_nFNRxo.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { Loader2, Building2, MapPin, Phone, Mail, Clock } from "lucide-vue-next";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const isSubmitting = ref(false);
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="relative"><div class="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,#4c1d95,transparent)] opacity-50"></div><div class="relative container mx-auto px-4 py-32"><div class="max-w-5xl mx-auto"><div class="text-center mb-12"><h1 class="text-4xl md:text-5xl font-bold text-white mb-4"> Let&#39;s Talk </h1><p class="text-xl text-gray-300 max-w-2xl mx-auto"> Have questions about our services? We&#39;re here to help you optimize your website&#39;s performance. </p></div><div class="grid lg:grid-cols-2 gap-8"><div class="bg-white rounded-2xl shadow-xl p-8"><h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2><form class="space-y-6"><div class="grid md:grid-cols-2 gap-6"><div class="space-y-2"><label for="firstName" class="text-sm font-medium text-gray-700">First Name</label><input id="firstName"${ssrRenderAttr("value", form.value.firstName)} type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required></div><div class="space-y-2"><label for="lastName" class="text-sm font-medium text-gray-700">Last Name</label><input id="lastName"${ssrRenderAttr("value", form.value.lastName)} type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required></div></div><div class="space-y-2"><label for="email" class="text-sm font-medium text-gray-700">Email</label><input id="email"${ssrRenderAttr("value", form.value.email)} type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required></div><div class="space-y-2"><label for="subject" class="text-sm font-medium text-gray-700">Subject</label><select id="subject" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "") : ssrLooseEqual(form.value.subject, "")) ? " selected" : ""}>Select a subject</option><option value="performance"${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "performance") : ssrLooseEqual(form.value.subject, "performance")) ? " selected" : ""}>Website Performance</option><option value="pricing"${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "pricing") : ssrLooseEqual(form.value.subject, "pricing")) ? " selected" : ""}>Pricing &amp; Plans</option><option value="support"${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "support") : ssrLooseEqual(form.value.subject, "support")) ? " selected" : ""}>Technical Support</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "other") : ssrLooseEqual(form.value.subject, "other")) ? " selected" : ""}>Other</option></select></div><div class="space-y-2"><label for="message" class="text-sm font-medium text-gray-700">Message</label><textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}><span class="flex items-center justify-center gap-2">`);
      if (isSubmitting.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</span></button></form></div><div class="space-y-8"><div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-6 h-6 text-purple-300" }, null, _parent));
      _push(`<h2 class="text-2xl font-bold text-white">Our Offices</h2></div><div class="space-y-6"><div class="flex gap-4">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-purple-300 flex-shrink-0 mt-1" }, null, _parent));
      _push(`<div><h3 class="font-semibold text-white mb-1">Luxembourg (HQ)</h3><p class="text-gray-300">14, rue Robert Stumper<br>L-2557 Luxembourg</p></div></div></div></div><div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-6 h-6 text-purple-300" }, null, _parent));
      _push(`<h2 class="text-2xl font-bold text-white">Contact Methods</h2></div><div class="space-y-6"><div class="flex gap-4">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-purple-300 flex-shrink-0 mt-1" }, null, _parent));
      _push(`<div><h3 class="font-semibold text-white mb-1">Email Us</h3><a href="mailto:info@webpros.com" class="text-purple-300 hover:text-white transition-colors"> info@webpros.com </a></div></div><div class="flex gap-4">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-purple-300 flex-shrink-0 mt-1" }, null, _parent));
      _push(`<div><h3 class="font-semibold text-white mb-1">Business Hours</h3><p class="text-gray-300">Monday - Friday<br>9:00 AM - 6:00 PM CET</p></div></div></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-D_939uGA.js.map
