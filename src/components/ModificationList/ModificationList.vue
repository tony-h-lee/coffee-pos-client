<template>
  <div class="modification-list">
    <ModificationItem
      v-on:click.native="selectModification(modification)"
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
  },
  methods: {
    selectModification: function (modification) {
      this.$emit('toggleModification', modification)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables/widths.scss";
  .modification-list {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
