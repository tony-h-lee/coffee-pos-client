import { InventoryItem } from '@/classes/InventoryItem'
/*
 * Represents a selected InventoryItem along with any selected ModificationItems that correspond
 * to that InventoryItem
 *
 * @param {item} : object - An InventoryItem Wrapped object that was selected to add
 * @param {modifcations} : array - An array containing selected ModificationItems for the selected InventoryItem
 */
export function OrderItem (item, modifications) {
  // Hacky solution using date for a new order item's inventory item id, need a unique id generator
  this.item = new InventoryItem(Object.assign({}, {...item}, {id: item.id + Date.now()}))
  this.modifications = modifications
}

OrderItem.prototype.getTotalCost = function () {
  let currCost = this.item.cost
  this.modifications.map((modification) => {
    currCost += +modification.cost
  })
  return currCost
}
