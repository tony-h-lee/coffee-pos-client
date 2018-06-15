import { OrderItem } from './OrderItem'

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
  this.items = [...this.items, new OrderItem(item, modifications)]
}

// Remove a selected item from the currently order items
OrderBuilder.prototype.removeItem = function (selectedItem) {
  this.items = this.items.filter((orderItem) => orderItem.id !== selectedItem.id)
}
