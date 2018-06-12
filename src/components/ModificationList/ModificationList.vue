<template>
  <div class="modification-list">
    <ModificationItem
      v-for="modification in modifications"
      v-bind:item="modification"
      v-bind:key="modification.id"
    ></ModificationItem>
  </div>
</template>

<script>
import ModificationItem from '@/components/ModificationItem/ModificationItem'
export default {
  name: 'ModificationList',
  components: {
    ModificationItem
  },
  props: {
    modifications: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .modification-list {
    display: flex;
    flex-direction: column;
    @media(max-width: $medium-breakpoint) {
      min-height: 100vh;
      min-width: 250px;
    }
    @media(max-width: $small-breakpoint) {
      display: none;
    }
  }
</style>
