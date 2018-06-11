<template>
  <div class="modifications-panel">
    <p> Modifications </p>
  </div>
</template>

<script>
export default {
  name: 'Modifications',
  props: {
    selected: { type: Object, required: true }
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
