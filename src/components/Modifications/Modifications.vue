<template>
  <div class="modifications-panel">
    <h2> Modifications </h2>
    <h1 v-if="selected"> {{ selected.name }}</h1>
    <div v-if="!selected">
      <p> Select an item </p>
    </div>
    <ModificationList
      v-bind:modifications="modifications.filteredModifications(selected)"
      v-on:toggleModification="toggleModification">
    </ModificationList>
    <div v-if="selected" class="modifications-control">
      <h3> Cost: ${{ cost.toFixed(2) }}</h3>
      <button v-on:click="addToOrder(selected, modifications)"> Add to order </button>
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
      return +this.selected.cost + this.modifications.getSelectedCost()
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
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    overflow: auto;
    .modifications-control {
      h3 {
        margin: 1rem 0;
      }
      padding: 1.5rem;
    }
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
      min-width: 250px;
    }
    @media(max-width: $small-breakpoint) {
      display: none;
    }
  }
</style>
