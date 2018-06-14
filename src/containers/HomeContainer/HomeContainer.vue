<template>
  <div class="home-wrapper">
    <div class="home-grid" v-if="state.shopData.isSet()">
      <Modifications v-bind="{ selected: state.selectedItem, modifications: state.shopData.modifications }">
      </Modifications>
      <Inventory
        v-bind="{ inventory: state.shopData.items }"
        v-on:selectItem="loadModifications">
      </Inventory>
      <Order :items="state.currentOrder"></Order>
    </div>
    <div class="home-loader" v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Container from '@/classes/Container'
import Spinner from '@/components/Spinner/Spinner'
import Inventory from '@/components/Inventory/Inventory'
import Modifications from '@/components/Modifications/Modifications'
import Order from '@/components/Order/Order'
import { getShopData } from './api'
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
    this.state.loading = true
    getShopData()
      .then(function (data) {
        this.state.loading = false
        this.state.shopData.setData(data)
      }.bind(this))
      .catch(function (error) {
        this.state.error = error
      })
  },
  methods: {
    loadModifications: function (item) {
      // Set the selected item so that modification panel can filter and reset any current modifications added
      this.state.selectedItem = item
      this.state.shopData.modifications.resetSelected()
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
  .home-grid {
    @extend %max-height;
    display: flex;
    @media(max-width: $medium-breakpoint) {
      flex-wrap: wrap;
    }
  }
</style>
