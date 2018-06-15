<template>
  <div class="modifications-panel">
    <p> Modifications </p>
    <h1> {{ selected.name }}</h1>
    <ModificationList
      v-bind:modifications="modifications.filteredModifications(selected)"
      v-on:toggleModification="toggleModification">
    </ModificationList>
    <div v-if="selected">
      <h1> Cost: ${{ cost }}</h1>
      <button v-on:click="addToOrder(selected, modifications)"> Add to order </button>
    </div>
    <div v-else>
      <h2> Select an item to begin an order </h2>
    </div>

  </div>
</template>

<script>
import ModificationList from '@/components/ModificationList/ModificationList'

export default {
  name: 'Modifications',
  components: {
    ModificationList
  },
  props: {
    selected: { type: [Object, Boolean], required: true },
    modifications: { type: [Object, Boolean], required: true }
  },
  computed: {
    cost: function () {
      return this.modifications.getSelectedCost()
    }
  },
  methods: {
    toggleModification: function (modification) {
      this.modifications.toggleItem(modification)
    },
    addToOrder: function (selected, modification) {
      if (selected && modification) {
        this.$emit('addToOrder', { selected, modification })
        this.modifications.resetAfterOrder()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .modifications-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    background: #DDD;
    overflow: auto;
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
      min-width: 250px;
    }
    @media(max-width: $small-breakpoint) {
      display: none;
    }
  }
</style>
