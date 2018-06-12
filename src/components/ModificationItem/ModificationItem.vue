<template>
  <div class="item-wrapper"
       v-on:click="toggle"
       v-bind:class="{active: selected}">
    <h1> {{ item.name }} </h1>
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
      console.log(this.selected)
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
    @media(max-width: $mobile-breakpoint) {
      flex-basis: calc(100% / 3);
    }
    @media(max-width: $small-breakpoint) {
      flex-basis: 50%;
      height: 300px;
    }
    @media(max-width: $tiny-breakpoint) {
      flex-basis: 100%;
      height: 300px;
    }
  }
  .active {
    background: #EEE;
  }
</style>
