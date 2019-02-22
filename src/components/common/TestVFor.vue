<template>
    <ul class="test">
        <li  v-for="item in items" :key="item.message">
            {{ item.message }}
        </li>
    </ul>
</template>

<script>

  export default {
    name: "test",
    props:['items']
  }
</script>

<style scoped>
</style>
