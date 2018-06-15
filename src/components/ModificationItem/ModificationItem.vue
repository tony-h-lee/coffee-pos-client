<template>
  <div class="item-wrapper"
       v-on:click="toggle"
       v-bind:class="{active: item.selected}">
    <h3> {{ item.name }} </h3>
    <p v-if="item.cost>0"> ${{ item.cost }} </p>
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
    h3, p {
      margin: 0.7rem 0;
    }
    cursor: pointer;
    background: #FFF;
    border-top: 1px solid #EEE;
  }
  .active {
    background: #EEE;
  }
</style>
