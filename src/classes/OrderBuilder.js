import { OrderItem } from './OrderItem'

const TAX_RATE = 0.14

/*
 * Converts JSON to a wrapper containing order objects
 *
 * @param {items} : array - An array of items that belong to one or more items
 */
export function OrderBuilder (items = []) {
  this.items = items
}

// Remove a selected item from the currently order items
OrderBuilder.prototype.addItem = function (item, modifications) {
  this.items = [...this.items, new OrderItem(item, modifications, this.items.length)]
}

// Remove a selected item from the currently order items
OrderBuilder.prototype.removeItem = function (selectedItem) {
  this.items = this.items.filter((orderItem) => orderItem.item.id !== selectedItem.item.id)
}

// Calculate total cost of all InventoryItems and ModificationItems
// Apply tax here
OrderBuilder.prototype.getTotal = function () {
  let cost = 0
  this.items.map((orderItem) => {
    cost += +orderItem.item.cost
    orderItem.modifications.map((modificationItem) => {
      cost += +modificationItem.cost
    })
  })
  return (cost + (cost * TAX_RATE))
}
