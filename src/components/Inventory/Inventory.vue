<template>
  <div class="inventory-panel">
    <p> Inventory </p>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
  props: {
    loading: { type: Boolean, required: true },
    error: { type: [Object, Boolean], required: true },
    inventory: { type: [Object, Boolean], required: true }
  }
}
</script>

<style lang="scss" scoped>
  .inventory-panel {
    display: flex;
    flex: 1;
  }
</style>
