import Vue from 'vue'
import svgIcon from '@/components/SvgIcon.vue'
// @ts-ignore
import { RequireContext } from '@/shims-vue'
Vue.component('svg-icon', svgIcon) // 挂载在全局
const requireAll = (requireContext: RequireContext) =>
  requireContext.keys().map(requireContext)
const req = (require as any).context('@/assets/icons/svg', false, /\.svg$/)

requireAll(req)
