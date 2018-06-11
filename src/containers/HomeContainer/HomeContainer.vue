<template>
  <HomePage :inventory="inventory" />
</template>

<script>
import Container from '@/classes/Container'
import Mock from '@/mock/example_store'
import HomePage from '@/views/HomePage/HomePage'

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
    // Call API to retrieve inventory
    setTimeout(function () {
      this.inventory = Mock
    }, 350)
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
  }
</style>
