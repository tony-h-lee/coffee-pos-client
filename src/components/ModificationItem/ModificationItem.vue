<template>
  <div class="item-wrapper"
       v-on:click="toggle"
       v-bind:class="{active: item.selected}">
    <h3> {{ item.name }} </h3>
  </div>
</template>

<script>
export default {
  name: 'ModificationItem',
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    toggle: function () {
      this.item.toggle()
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
    cursor: pointer;
    background: #FFF;
    border-top: 1px solid #EEE;
  }
  .active {
    background: #EEE;
  }
</style>
