<template>
  <div class="section">
    <p> Hi </p>
    <h1> {{ inventory.name }} </h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    loading: { type: Boolean, required: true },
    error: { type: [Object, Boolean], required: true },
    inventory: { type: [Object, Boolean], required: true }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    flex: 1;
  }
</style>
