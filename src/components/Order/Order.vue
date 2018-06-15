<template>
  <div class="order-panel">
    <p> Order </p>
    <OrderList
      v-if="order && order.items.length > 0"
      v-bind:items="order.items">
    </OrderList>
    <div v-else>
      <h2> Add an item to order </h2>
    </div>

  </div>
</template>

<script>
import OrderList from '@/components/OrderList/OrderList'
export default {
  name: 'Order',
  props: {
    order: { type: Object, required: true }
  },
  components: {
    OrderList
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
    overflow: auto;
    max-height: 100vh;
    @media(max-width: $medium-breakpoint) {
      flex-basis: 100%;
      min-height: 300px;
      max-height: 100%;
    }
  }
</style>
