<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName (): string {
      return `#icon-${this.iconClass}`
    },
    svgClass (): string {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
})

</script>

<style scoped>
svg {
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #8a8a8a;
  /*color: #ffffff;*/
  fill: currentColor;
}
</style>
