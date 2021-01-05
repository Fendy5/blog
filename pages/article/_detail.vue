<template>
  <div>detail-{{ $route.params.detail }}</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>

</style>
