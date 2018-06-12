<template>
  <div class="home-wrapper">
    <div class="home-grid" v-if="state.shopData && !state.loading">
      <Modifications :selected="state.selectedItem"></Modifications>
      <Inventory v-bind="{ loading, error, inventory: state.shopData.items }"></Inventory>
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
    console.log(this.state.loading)
    getShopData()
      .then(function (data) {
        this.state.loading = false
        this.state.shopData = data
      }.bind(this))
      .catch(function (error) {
        this.state.error = error
      })
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
