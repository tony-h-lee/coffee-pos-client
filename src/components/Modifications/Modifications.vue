<template>
  <div class="modifications-panel">
    <p> Modifications </p>
    <p> {{ selected.name }}</p>
    <ModificationList
      v-bind:modifications="filterModifications(modifications, selected)"
      v-on:toggleModification="toggleModification">
    </ModificationList>
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
    modifications: { type: [Array, Boolean], required: true }
  },
  methods: {
    // For each modification, find if the selected item belongs to this modifications to array
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
