import { BaseItem } from './BaseItem'

/*
 * Represents a selected InventoryItem along with any selected ModificationItems that correspond
 * to that InventoryItem
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
export function OrderItem (item) {
  BaseItem.call(this, item)
}

OrderItem.prototype = Object.create(BaseItem.prototype)
OrderItem.prototype.constructor = OrderItem
