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
  .modifications-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
  }
</style>
