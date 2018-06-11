<template>
  <div class="home-grid">
    <Modifications></Modifications>
    <Inventory v-bind="{ loading, error, inventory: data.items }"></Inventory>
    <Order></Order>
  </div>
</template>

<script>
import Container from '@/classes/Container'
import Inventory from '@/components/Inventory/Inventory'
import Modifications from '@/components/Modifications/Modifications'
import Order from '@/components/Order/Order'
import { getInventory } from './api'

export default {
  name: 'HomeContainer',
  mixins: [Container],
  data () {
    return {
      data: false
    }
  },
  components: {
    Inventory,
    Modifications,
    Order
  },
  mounted () {
    getInventory()
      .then(function (data) {
        this.data = data
      }.bind(this))
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .home-grid {
    height: 100%;
    display: flex;
    flex: 1;
    @media(max-width: $medium-breakpoint) {
      flex-wrap: wrap;
    }
  }
</style>
