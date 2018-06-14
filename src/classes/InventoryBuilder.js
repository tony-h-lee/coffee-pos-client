import { InventoryItem } from './InventoryItem'
import { ArrayBuilder } from './ArrayBuilder'

/*
 * Converts JSON to a wrapper containing inventory objects
 *
 * @param {modifications} : array - An array of modifications that belong to one or more items
 */
export function InventoryBuilder (items) {
  ArrayBuilder.call(this, InventoryItem, items)
}

InventoryBuilder.prototype = Object.create(ArrayBuilder.prototype)
InventoryBuilder.prototype.constructor = InventoryBuilder
