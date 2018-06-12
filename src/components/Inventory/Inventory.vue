<template>
  <div class="inventory-panel">
    <Item
      v-for="item in inventory"
      v-bind:item="item"
      v-bind:key="item.id">
    </Item>
  </div>
</template>

<script>
import Item from '@/components/Item/Item'
export default {
  name: 'Inventory',
  components: {
    Item
  },
  props: {
    loading: { type: Boolean, required: true },
    error: { type: [Object, Boolean], required: true },
    inventory: { type: [Array, Boolean], required: true }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .inventory-panel {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background: #EEE;
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
    }
  }
</style>
