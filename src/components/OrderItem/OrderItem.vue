<template>
  <div class="item-wrapper">
    <div class="item-name"> <h3> {{ orderItem.item.name }} </h3> </div>
    <div class="item-cost"> <p> ${{ totalCost(orderItem.modifications).toFixed(2) }} </p> </div>
    <div class="item-modifications">
      <div
        class="modification"
        v-for="modification in orderItem.modifications"
        v-bind:modification="modification"
        v-bind:key="modification.id">
        <div class="modification-name"> <p>{{ modification.name }} </p> </div>
        <div v-if="+modification.cost>0" class="modification-cost"> <p> ${{ (+modification.cost).toFixed(2) }} </p> </div>
      </div>
    </div>
    <div v-on:click="removeItem(orderItem)" class="remove-item"> <button> Remove </button> </div>
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
    },
    totalCost: function (modification) {
      let cost = +this.orderItem.item.cost
      modification.map((modificationItem) => {
        if (modificationItem.cost) cost += +modificationItem.cost
      })
      return cost
    },
    removeItem: function (item) {
      this.$emit('removeItem', item)
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
  .remove-item {
    width: 100%;
    text-align: right;
    button {
      border: 1px solid #DDD;
      background: #FAFAFA;
      padding: 5px 10px;
      cursor: pointer;
      color: #666;
      font-size: 0.7rem;
      transition: 0.15s;
      &:hover, &:active {
        color: #ad2626;
        border: 1px solid #d18383;
        background: #e2c3c3;
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
  }

</style>
