<template>
  <div class="g-main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'GlobalMain'
}
</script>

<style lang="scss" scoped>
    .g-main {
        width: 100%;
      min-height: 100vh;
    }
</style>
