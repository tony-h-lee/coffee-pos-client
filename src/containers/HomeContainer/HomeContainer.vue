<template>
  <div class="home-wrapper">
    <div class="home-grid" v-if="!loading && state.shopData.isSet()">
      <Modifications
        v-bind="{ selected: state.selectedItem, modifications: state.shopData.modifications }"
        v-on:addToOrder="addToOrder"
      >
      </Modifications>
      <Inventory
        v-bind="{ inventory: state.shopData.items }"
        v-on:selectItem="loadModifications">
      </Inventory>
      <Order v-bind="{ order: state.currentOrder }"
             v-on:checkout="checkout"></Order>
    </div>
    <div class="home-loader" v-else>
      <Spinner></Spinner>
      <h1 v-if="state.message"> {{ state.message }}</h1>
    </div>
  </div>
</template>

<script>
import Container from '@/classes/Container'
import Spinner from '@/components/Spinner/Spinner'
import Inventory from '@/components/Inventory/Inventory'
import Modifications from '@/components/Modifications/Modifications'
import Order from '@/components/Order/Order'
import { getShopData, createOrder } from './api'
import store from './store'

export default {
  name: 'HomeContainer',
  mixins: [Container],
  data () {
    return {
      state: store.state
    }
  },
  components: {
    Inventory,
    Modifications,
    Order,
    Spinner
  },
  mounted () {
    this.loading = true
    getShopData()
      .then(function (data) {
        this.loading = false
        this.state.shopData.setData(data)
      }.bind(this))
      .catch(function (error) {
        this.error = error
      }.bind(this))
  },
  methods: {
    // Set the selected item so that modification panel can filter and reset any current modifications added
    loadModifications: function (item) {
      this.state.shopData.modifications.resetSelected(this.state.selectedItem, item)
      this.state.selectedItem = item
    },
    // Add an OrderItem with selected InventoryItem and array of ModificationItems and
    // reset the modifications and selected item
    addToOrder: function (data) {
      const { selected, modification } = data
      this.state.currentOrder.addItem(selected, modification.selectedItems)
      this.state.shopData.modifications.resetSelected(this.state.selectedItem, selected)
      this.state.selectedItem = false
    },
    checkout: function () {
      this.loading = true
      this.state.message = 'Processing order...'
      createOrder(this.state.currentOrder)
        .then(function (data) {
          this.state.message = false
          this.loading = false
          this.state.currentOrder.resetOrder()
          this.state.shopData.modifications.resetAfterOrder()
          this.state.selectedItem = false
        }.bind(this))
        .catch(function (error) {
          this.error = error
        }.bind(this))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  %max-height {
    min-height: 100vh;
  }
  .home-wrapper, .home-loader {
    @extend %max-height;
  }
  .home-loader h1 {
    text-align: center;
  }
  .home-grid {
    @extend %max-height;
    display: flex;
    @media(max-width: $medium-breakpoint) {
      flex-wrap: wrap;
    }
  }
</style>
