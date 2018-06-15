<template>
  <div class="item-wrapper">
    <div class="item-name"> <h3> {{ orderItem.item.name }} </h3> </div>
    <div class="item-cost"> <p> ${{ orderItem.item.cost }} </p> </div>
    <div class="item-modifications">
      <div
        class="modification"
        v-for="modification in orderItem.modifications"
        v-bind:modification="modification"
        v-bind:key="modification.id">
        <div class="modification-name"> <p>{{ modification.name }} </p> </div>
        <div v-if="+modification.cost>0" class="modification-cost"> <p> ${{ modification.cost }} </p> </div>
      </div>
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
    padding: .8rem;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    background: #FFF;
    border-top: 1px solid #EEE;
    h3, p {
      margin: 0;
    }
    .item-name, .modification-name {
      flex-basis: 70%;
    }
    .item-cost, .modification-cost {
      flex-basis: 30%;
    }
  }
  .item-modifications {
    color: #777;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    .modification {
      width: 100%;
      display: flex;

      align-items: center;
      margin: 0.2rem 0;
      p {
        font-size: 0.9rem;
      }
    }
  }

</style>
