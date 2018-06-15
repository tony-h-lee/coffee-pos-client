<template>
  <div class="order-panel">
    <h2> Order </h2>
    <div class="order-content" v-if="order && order.items.length > 0">
      <OrderList v-bind:items="order.items"></OrderList>
      <div class="order-control">
        <h3> Total Cost: $12.00</h3>
        <button> Checkout </button>
      </div>
    </div>
    <div v-else>
      <p> Add an item to order </p>
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
    flex-basis: 20%;
    text-align: center;
    flex-direction: column;
    max-height: 100vh;
    .order-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      .order-control {
        padding: 1rem;
      }
    }
    @media(max-width: $medium-breakpoint) {
      flex-basis: 100%;
      min-height: 300px;
      max-height: 100%;
    }
  }
</style>
