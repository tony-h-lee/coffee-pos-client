<template>
  <div class="modifications-panel">
    <p> Modifications </p>
    <h1> {{ selected.name }}</h1>
    <ModificationList
      v-bind:modifications="filteredModifications"
      v-on:toggleModification="toggleModification">
    </ModificationList>
    <div v-if="selected">
      <h1> Cost: {{ cost }}</h1>
      <button> Add to order </button>
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
    modifications: { type: [Object, Boolean], required: true },
    selectedModifications: { type: Array, required: true }
  },
  computed: {
    // For each modification, return only if the modification belongs to the selected item
    filteredModifications: function () {
      return this.modifications && this.selected
        ? this.modifications.filter((modification) => modification.to.some((to) => to.id === this.selected.id))
        : []
    }
  },
  data () {
    return {
      cost: 0
    }
  },
  methods: {
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
