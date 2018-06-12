<template>
  <div class="inventory-panel">
    <Item
      v-on:click.native="selectItem(item)"
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
    inventory: { type: [Array, Boolean], required: true }
  },
  methods: {
    selectItem: function (item) {
      this.$emit('selectItem', item)
    }
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
    align-content: flex-start;
    @media(max-width: $medium-breakpoint) {
      min-height: 50vh;
    }
  }
</style>
