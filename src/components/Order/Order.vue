<template>
  <div class="order-panel">
    <p> Order </p>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    order: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .order-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    background: #CCC;
    @media(max-width: $medium-breakpoint) {
      flex-basis: 100%;
      min-height: 300px;
    }
  }
</style>
