<template>
  <div class="inventory-panel">
    <p> Inventory </p>
    <h1> {{ inventory[0].name }} </h1>
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
  @import "../../styles/variables/widths.scss";
  .inventory-panel {
    display: flex;
    flex: 1;
    background: #EEE;
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
    }
  }
</style>
