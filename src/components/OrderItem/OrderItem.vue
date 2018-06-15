<template>
  <div class="item-wrapper">
    <h3> {{ orderItem.item.name }} </h3>
    <div v-for="modification in orderItem.modifications"
         v-bind:modification="modification"
         v-bind:key="modification.id">
      <p> {{ modification.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    orderItem: { type: Object, required: true }
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
    background: #FFF;
    border: 1px solid #EEE;
  }
  .active {
    background: #EEE;
  }
</style>
