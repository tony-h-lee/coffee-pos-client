<template>
  <div class="item-wrapper">
    <h3> {{ item.name }} </h3>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .item-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      margin: 0;
    }
    cursor: pointer;
    background: #FFF;
    border: 1px solid #EEE;
    flex-basis: 25%;
    height: 200px;
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
</style>
