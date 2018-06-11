<template>
  <div class="grid">
    <p> Hi </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    inventory: { type: [Object, Boolean], required: true }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
  }
</style>
