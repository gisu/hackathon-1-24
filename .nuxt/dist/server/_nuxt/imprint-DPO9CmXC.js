import { _ as __nuxt_component_0, a as _sfc_main$1 } from "./Footer-C_nFNRxo.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Building2, Contact, Users, Scale } from "lucide-vue-next";
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
  __name: "imprint",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="relative"><div class="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,#4c1d95,transparent)] opacity-50"></div><div class="relative container mx-auto px-4 py-32"><div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"><h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8"> Legal Notice </h1><div class="space-y-12"><section><h2 class="text-2xl font-semibold text-gray-900 mb-6">Company Information</h2><div class="grid md:grid-cols-2 gap-8"><div class="bg-gray-50 rounded-lg p-6 border border-gray-100">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-8 h-8 text-purple-600 mb-4" }, null, _parent));
      _push(`<div class="space-y-2"><p class="font-semibold text-gray-900">WebPros Investments S.à r.l.</p><p class="text-gray-600">14, rue Robert Stumper</p><p class="text-gray-600">L-2557 Luxembourg</p><p class="text-gray-600">Registration: B241080</p></div></div><div class="bg-gray-50 rounded-lg p-6 border border-gray-100">`);
      _push(ssrRenderComponent(unref(Contact), { class: "w-8 h-8 text-purple-600 mb-4" }, null, _parent));
      _push(`<div class="space-y-2"><p class="font-semibold text-gray-900">Contact Information</p><p class="text-gray-600">Email: info@webpros.com</p><p class="text-gray-600">Phone: +352 000 000</p></div></div></div></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">Management</h2><div class="bg-gray-50 rounded-lg p-6 border border-gray-100">`);
      _push(ssrRenderComponent(unref(Users), { class: "w-8 h-8 text-purple-600 mb-4" }, null, _parent));
      _push(`<p class="text-gray-600"> Managing Directors: [Names of Managing Directors] </p></div></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">Legal Notices</h2><div class="bg-gray-50 rounded-lg p-6 border border-gray-100">`);
      _push(ssrRenderComponent(unref(Scale), { class: "w-8 h-8 text-purple-600 mb-4" }, null, _parent));
      _push(`<div class="space-y-4 text-gray-600"><p> All content on this website is protected by copyright law. Any reproduction or use requires explicit permission from WebPros Investments S.à r.l. </p><p> The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability or availability of the information. </p></div></div></section></div></div></div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/imprint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=imprint-DPO9CmXC.js.map
