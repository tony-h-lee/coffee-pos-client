import { BaseItem } from './BaseItem'

/*
 * An InventoryItem represents a selection of base drinks sold by the shop
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
export function InventoryItem (item) {
  BaseItem.call(this, item)
  this.thumbnail = item.thumbnail
}

InventoryItem.prototype = Object.create(BaseItem.prototype)
InventoryItem.prototype.constructor = InventoryItem
