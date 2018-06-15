<template>
  <div class="order-list">
    <OrderItem
      v-for="item in items"
      v-bind:orderItem="item"
      v-bind:key="item.id"
      v-on:removeItem="removeItem"
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
    removeItem: function (item) {
      this.$emit('removeItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .order-list {
    text-align: left;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
</style>
