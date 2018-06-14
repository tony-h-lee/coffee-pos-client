import { OrderItem } from './OrderItem'
import { ArrayBuilder } from './ArrayBuilder'

/*
 * Converts JSON to a wrapper containing order objects
 *
 * @param {items} : array - An array of items that belong to one or more items
 */
export function OrderBuilder (items = []) {
  ArrayBuilder.call(this, OrderItem, items)
}

OrderBuilder.prototype = Object.create(ArrayBuilder.prototype)
OrderBuilder.prototype.constructor = OrderBuilder

// Remove a selected item from the currently order items
OrderBuilder.prototype.removeItem = function (item) {
  this.selectedItems = this.selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
}
