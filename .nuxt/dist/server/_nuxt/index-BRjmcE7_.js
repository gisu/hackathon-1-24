import { _ as __nuxt_component_0$1, a as _sfc_main$5 } from "./Footer-C_nFNRxo.js";
import { defineComponent, mergeProps, unref, useSSRContext, ref, computed, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { ChevronDown, Gauge, Clock, Wifi, Zap, FileDown, HardDrive, Code, Image, CheckCircle, Loader2, Globe2, BarChart3 } from "lucide-vue-next";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-B2eMa8L8.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LocationSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const locations = [
      { value: "616441aff8e2232e0d58907f", label: "New York, US" },
      { value: "61644bd8f8e2232e0d5893de", label: "London, UK" },
      { value: "61644bdcf8e2232e0d5893e0", label: "Paris, FR" },
      { value: "61644be3f0478a0c9846b771", label: "Tokyo, JP" },
      { value: "616466aaba7169082b50723b", label: "Singapore, SG" },
      { value: "60e81944f401963e610a0623", label: "Nuremberg, DE" },
      { value: "61162c08cac0b5844220bbdc", label: "Falkenstein, DE" },
      { value: "61162c38cac0b5844220bbdd", label: "Falkenstein #2, DE" },
      { value: "61162c72cac0b5844220bbde", label: "Falkenstein #3, DE" },
      { value: "61162d5acac0b5844220bbdf", label: "Helsinki, FI" },
      { value: "616448a8ba7169082b506849", label: "Los Angeles, US" },
      { value: "61644bc8f8e2232e0d5893aa", label: "Atlanta, US" },
      { value: "61644bd3ba7169082b5069a8", label: "Chicago, US" },
      { value: "61644bd7f0478a0c9846b751", label: "Dallas, US" },
      { value: "61644bdcf8e2232e0d5893df", label: "Mexico City, MX" },
      { value: "61644bdfba7169082b5069da", label: "Silicon Valley, US" },
      { value: "6164669cf8e2232e0d589bc8", label: "Toronto, CA" },
      { value: "616466a0f0478a0c9846be1b", label: "Amsterdam, NL" },
      { value: "616466a3ba7169082b50723a", label: "Miami, US" },
      { value: "616466a5f0478a0c9846be1c", label: "Seattle, US" },
      { value: "616466aaf8e2232e0d589bc9", label: "Stockholm, SE" },
      { value: "616466aeba7169082b50723c", label: "Sydney, AU" },
      { value: "61fb935e26fcf0158b834562", label: "Ashburn, US" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full md:w-64" }, _attrs))} data-v-d7d3ec53><select${ssrRenderAttr("value", _ctx.modelValue)} class="${ssrRenderClass([{ "text-gray-400": !_ctx.modelValue }, "w-full px-6 py-4 rounded-lg bg-white/10 border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer pr-12 transition-all hover:bg-white/20"])}"${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} data-v-d7d3ec53><option value="" disabled selected data-v-d7d3ec53>Select location</option><!--[-->`);
      ssrRenderList(locations, (location) => {
        _push(`<option${ssrRenderAttr("value", location.value)} data-v-d7d3ec53>${ssrInterpolate(location.label)}</option>`);
      });
      _push(`<!--]--></select><div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" data-v-d7d3ec53>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "h-5 w-5 text-white/70" }, null, _parent));
      _push(`</div>`);
      if (_ctx.modelValue) {
        _push(`<div class="absolute left-6 -top-2 px-2 bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-xs font-medium rounded" data-v-d7d3ec53> Test Location </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LocationSelect.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d7d3ec53"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AnalysisResults",
  __ssrInlineRender: true,
  props: {
    results: {}
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      name: "",
      email: ""
    });
    const performanceMetrics = computed(() => [
      {
        name: "Performance Score",
        value: props.results.data.performance.score,
        max: 100,
        unit: "",
        icon: Gauge,
        description: "Overall performance rating"
      },
      {
        name: "Load Time",
        value: props.results.data.performance.loadTime,
        max: 5,
        unit: "s",
        icon: Clock,
        description: "Total page load time"
      },
      {
        name: "Speed Index",
        value: props.results.data.performance.speedIndex,
        max: 5,
        unit: "s",
        icon: Wifi,
        description: "Visual loading speed"
      },
      {
        name: "Time to First Byte",
        value: props.results.data.performance.ttfb,
        max: 2,
        unit: "s",
        icon: Zap,
        description: "Server response time"
      }
    ]);
    const resourceMetrics = computed(() => [
      {
        name: "Total Resources",
        value: props.results.data.resources.totalFiles,
        unit: "files",
        icon: FileDown
      },
      {
        name: "Total Size",
        value: props.results.data.resources.totalSize,
        unit: "",
        icon: HardDrive
      },
      {
        name: "JavaScript Size",
        value: props.results.data.resources.jsSize,
        unit: "",
        icon: Code
      },
      {
        name: "Media Size",
        value: props.results.data.resources.imageSize,
        unit: "",
        icon: Image
      }
    ]);
    function getScoreColor(score) {
      if (score >= 90) return "text-green-600";
      if (score >= 50) return "text-yellow-600";
      return "text-red-600";
    }
    function getScoreBackgroundColor(score) {
      if (score >= 90) return "bg-green-500";
      if (score >= 50) return "bg-yellow-500";
      return "bg-red-500";
    }
    function getPercentage(value, max) {
      return Math.min(value / max * 100, 100);
    }
    function formatValue(value) {
      return typeof value === "number" ? value.toFixed(1) : value.toString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.results) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-2 gap-8" }, _attrs))}><div class="space-y-8"><div class="bg-white rounded-lg shadow-xl p-6"><h2 class="text-2xl font-bold text-gray-900 mb-6">Performance Analysis</h2><div class="grid gap-6"><!--[-->`);
        ssrRenderList(performanceMetrics.value, (metric) => {
          _push(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-100"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-3">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(metric.icon), { class: "h-5 w-5 text-purple-600" }, null), _parent);
          _push(`<h3 class="text-sm font-medium text-gray-800">${ssrInterpolate(metric.name)}</h3></div><div class="${ssrRenderClass([getScoreColor(metric.value), "text-2xl font-bold"])}">${ssrInterpolate(formatValue(metric.value))}${ssrInterpolate(metric.unit)}</div></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="${ssrRenderClass([getScoreBackgroundColor(metric.value), "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${getPercentage(metric.value, metric.max)}%` })}"></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white rounded-lg shadow-xl p-6"><h2 class="text-2xl font-bold text-gray-900 mb-6">Resource Analysis</h2><div class="grid gap-6"><!--[-->`);
        ssrRenderList(resourceMetrics.value, (resource) => {
          _push(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-100"><div class="flex items-center gap-3 mb-2">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resource.icon), { class: "h-5 w-5 text-purple-600" }, null), _parent);
          _push(`<h3 class="font-medium text-gray-800">${ssrInterpolate(resource.name)}</h3></div><div class="text-2xl font-bold text-gray-900">${ssrInterpolate(resource.value)} <span class="text-sm font-normal text-gray-600">${ssrInterpolate(resource.unit)}</span></div></div>`);
        });
        _push(`<!--]--></div></div></div><div class="lg:sticky lg:top-8 h-fit"><div class="bg-white rounded-lg shadow-xl p-8 border border-gray-100"><div class="text-center mb-8"><h2 class="text-2xl font-bold text-gray-900 mb-4">Unlock Premium Features</h2><p class="text-gray-600">Get detailed insights and recommendations with our professional plans.</p></div><div class="space-y-6 mb-8"><div class="flex items-center gap-3"><div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-purple-600" }, null, _parent));
        _push(`</div><p class="text-gray-700">Advanced performance metrics</p></div><div class="flex items-center gap-3"><div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-purple-600" }, null, _parent));
        _push(`</div><p class="text-gray-700">Continuous monitoring</p></div><div class="flex items-center gap-3"><div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-purple-600" }, null, _parent));
        _push(`</div><p class="text-gray-700">Custom reporting</p></div><div class="flex items-center gap-3"><div class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-purple-600" }, null, _parent));
        _push(`</div><p class="text-gray-700">API integration</p></div></div><form class="space-y-4"><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent" required><button type="submit" class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"> Start Your Trial </button></form><p class="mt-4 text-center text-sm text-gray-500"> 14-day trial, cancel anytime </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnalysisResults.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function usePerformanceAnalysis() {
  const url = ref("");
  const isLoading = ref(false);
  const error = ref("");
  const results = ref(null);
  const showResults = ref(false);
  async function analyzeUrl(inputUrl, probeId) {
    error.value = "";
    isLoading.value = true;
    results.value = null;
    showResults.value = false;
    try {
      await new Promise((resolve) => setTimeout(resolve, 2e3));
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
      };
      setTimeout(() => {
        showResults.value = true;
      }, 500);
    } catch (e) {
      error.value = "Failed to analyze the website. Please try again.";
      console.error("Analysis error:", e);
    } finally {
      isLoading.value = false;
    }
  }
  return {
    url,
    isLoading,
    error,
    results,
    showResults,
    analyzeUrl
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AnalyzerForm",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      url,
      isLoading,
      error,
      results,
      showResults,
      analyzeUrl
    } = usePerformanceAnalysis();
    const selectedLocation = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LocationSelect = __nuxt_component_0;
      const _component_AnalysisResults = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden pt-24" }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#4c1d95,transparent)]"></div><div class="absolute inset-0 opacity-20" style="${ssrRenderStyle({ "background-image": "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJkb3RzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')" })}"></div></div><div class="relative container mx-auto px-4 py-20"><h1 class="text-center mb-12"><div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"><span class="text-white">Use the</span><span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text"> power of</span></div><div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2"><span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text">website speed</span></div><div class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2"><span class="text-white">to drive more</span><span class="animate-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_auto] text-transparent bg-clip-text"> sales</span></div>`);
      if (!unref(showResults)) {
        _push(`<p class="text-xl md:text-2xl text-gray-300 mt-8"> Want to test your website&#39;s performance? Enter your URL below. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h1>`);
      if (!unref(showResults)) {
        _push(`<form class="max-w-4xl mx-auto flex flex-col md:flex-row gap-4"><input${ssrRenderAttr("value", unref(url))} type="url" placeholder="www.yoursite.com" class="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} required>`);
        _push(ssrRenderComponent(_component_LocationSelect, {
          modelValue: selectedLocation.value,
          "onUpdate:modelValue": ($event) => selectedLocation.value = $event,
          disabled: unref(isLoading)
        }, null, _parent));
        _push(`<button type="submit" class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none min-w-[160px] overflow-hidden"${ssrIncludeBooleanAttr(unref(isLoading) || !unref(url) || !selectedLocation.value) ? " disabled" : ""}><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div><span class="relative flex items-center justify-center gap-2">`);
        if (unref(isLoading)) {
          _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 animate-spin" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Zap), { class: "h-5 w-5" }, null, _parent));
        }
        _push(` ${ssrInterpolate(unref(isLoading) ? "Analyzing..." : "Test Now")}</span></button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div class="mt-4 text-center text-red-400 animate-fade-in">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showResults) && unref(results)) {
        _push(`<div class="mt-12">`);
        _push(ssrRenderComponent(_component_AnalysisResults, { results: unref(results) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnalyzerForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MetricsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const metrics = [
      {
        name: "Performance",
        description: "Measure loading speed, time to interactive, and overall performance metrics.",
        icon: Gauge
      },
      {
        name: "Global Reach",
        description: "Test your site from multiple locations worldwide for consistent performance.",
        icon: Globe2
      },
      {
        name: "Real-time Analysis",
        description: "Get instant feedback on your website's performance and areas for improvement.",
        icon: Zap
      },
      {
        name: "Detailed Reports",
        description: "Receive comprehensive reports with actionable insights and recommendations.",
        icon: BarChart3
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" }, _attrs))}><!--[-->`);
      ssrRenderList(metrics, (metric) => {
        _push(`<div class="bg-white rounded-lg shadow-lg p-6 border border-gray-100"><div class="flex items-center gap-4 mb-4">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(metric.icon), { class: "h-8 w-8 text-purple-600" }, null), _parent);
        _push(`<h3 class="text-lg font-semibold text-gray-900">${ssrInterpolate(metric.name)}</h3></div><p class="text-gray-600">${ssrInterpolate(metric.description)}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetricsGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { results } = usePerformanceAnalysis();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_AnalyzerForm = _sfc_main$2;
      const _component_MetricsGrid = _sfc_main$1;
      const _component_AnalysisResults = _sfc_main$3;
      const _component_Footer = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_AnalyzerForm, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-12">`);
      _push(ssrRenderComponent(_component_MetricsGrid, null, null, _parent));
      if (unref(results)) {
        _push(ssrRenderComponent(_component_AnalysisResults, { results: unref(results) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BRjmcE7_.js.map
