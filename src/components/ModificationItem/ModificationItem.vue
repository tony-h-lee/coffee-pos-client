<template>
  <div class="item-wrapper"
       v-on:click="toggle"
       v-bind:class="{active: selected}">
    <h3> {{ item.name }} </h3>
  </div>
</template>

<script>
export default {
  name: 'ModificationItem',
  props: {
    item: { type: Object, required: true }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    toggle: function () {
      this.selected = !this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .item-wrapper {
    h1 {
      margin-top: 0;
    }
    background: #FFF;
    border: 1px solid #EEE;
  }
  .active {
    background: #EEE;
  }
</style>
