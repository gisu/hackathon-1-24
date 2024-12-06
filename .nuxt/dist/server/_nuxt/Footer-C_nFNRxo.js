import { mergeProps, useSSRContext, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B2eMa8L8.js";
import { Linkedin, Instagram, Facebook } from "lucide-vue-next";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 right-0 z-10" }, _attrs))}><div class="container mx-auto px-4 py-6"><div class="flex items-center justify-between"><a href="/" class="flex items-center"><img src="https://webpros.com/wp-content/uploads/2023/03/Webpros-negative.svg" alt="WebPros" class="h-8 w-auto"></a></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-purple-950 text-white py-16" }, _attrs))}><div class="container mx-auto px-4"><div class="flex flex-col lg:flex-row justify-between items-start mb-12"><div class="mb-8 lg:mb-0 max-w-md"><img src="https://webpros.com/wp-content/uploads/2023/03/Webpros-negative.svg" alt="WebPros" class="h-8 w-auto mb-4"><p class="text-gray-400 mb-4"> Cross-platform, multi-functional, omni-channel.<br> Your web enablement ecosystem. </p><div class="flex gap-4"><a href="https://linkedin.com/company/webpros" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">`);
      _push(ssrRenderComponent(unref(Linkedin), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="https://instagram.com/webpros" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">`);
      _push(ssrRenderComponent(unref(Instagram), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="https://facebook.com/webpros" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">`);
      _push(ssrRenderComponent(unref(Facebook), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-8"><div><h3 class="font-semibold mb-4">Company</h3><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "text-gray-400 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/imprint",
        class: "text-gray-400 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Imprint`);
          } else {
            return [
              createTextVNode("Imprint")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="font-semibold mb-4">Resources</h3><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/careers",
        class: "text-gray-400 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/offices",
        class: "text-gray-400 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Offices`);
          } else {
            return [
              createTextVNode("Offices")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="font-semibold mb-4">Support</h3><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-400 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact us`);
          } else {
            return [
              createTextVNode("Contact us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><div class="pt-8 border-t border-white/10"><p class="text-gray-400 text-sm"> WebPros Investments S.à r.l. · 14, rue Robert Stumper · L-2557 Luxembourg · B241080 © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} All rights reserved. </p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __nuxt_component_0 as _,
  _sfc_main as a
};
//# sourceMappingURL=Footer-C_nFNRxo.js.map
