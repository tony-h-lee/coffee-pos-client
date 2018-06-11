<template>
  <div class="order-panel">
    <p> Order </p>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    items: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .order-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
  }
</style>
