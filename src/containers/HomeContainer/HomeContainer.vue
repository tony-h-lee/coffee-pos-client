<template>
  <HomePage v-bind="{ loading, error, inventory }"></HomePage>
</template>

<script>
import Container from '@/classes/Container'
import HomePage from '@/views/HomePage/HomePage'
import { getInventory } from './api'

export default {
  name: 'HomeContainer',
  mixins: [Container],
  data () {
    return {
      inventory: false
    }
  },
  components: {
    HomePage
  },
  mounted () {
    getInventory()
      .then(function (inventory) {
        this.inventory = inventory
      }.bind(this))
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
  }
</style>
