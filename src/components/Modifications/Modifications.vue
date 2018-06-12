<template>
  <div class="modifications-panel">
    <p> Modifications </p>
    <h1> {{ selected.name }}</h1>
    <ModificationList
      v-bind:modifications="filterModifications(modifications, selected)"
      v-on:toggleModification="toggleModification">
    </ModificationList>
    <h1> Cost: {{ cost }}</h1>
    <button> Add to order </button>
  </div>
</template>

<script>
import ModificationList from '@/components/ModificationList/ModificationList'
export default {
  name: 'Modifications',
  components: {
    ModificationList
  },
  data () {
    return {
      cost: 0
    }
  },
  props: {
    selected: { type: [Object, Boolean], required: true },
    modifications: { type: [Array, Boolean], required: true }
  },
  methods: {
    // For each modification, return only if the modification belongs to the selected item
    filterModifications: (modifications, selectedItem) => {
      return modifications && selectedItem
        ? modifications.filter((modification) => modification.to.some((to) => to.id === selectedItem.id)) : []
    },
    toggleModification: function (modification) {
      this.$emit('toggleModification', modification)
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
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
      min-width: 250px;
    }
    @media(max-width: $small-breakpoint) {
      display: none;
    }
  }
</style>
