<template>
  <div class="order-list">
    <OrderItem
      v-for="item in items"
      v-bind:orderItem="item"
      v-bind:key="item.id"
    ></OrderItem>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem/OrderItem'
export default {
  name: 'OrderList',
  components: {
    OrderItem
  },
  props: {
    items: { type: Array, required: true }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .order-list {
    display: flex;
    flex-direction: column;
  }
</style>
