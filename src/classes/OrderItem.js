/*
 * Represents a selected InventoryItem along with any selected ModificationItems that correspond
 * to that InventoryItem
 *
 * @param {item} : object - An InventoryItem Wrapped object that was selected to add
 * @param {modifcations} : array - An array containing selected ModificationItems for the selected InventoryItem
 */
export function OrderItem (item, modifications) {
  this.item = item
  this.modifications = modifications
}

OrderItem.prototype.getTotalCost = function () {
  let currCost = this.item.cost
  this.modifications.map((modification) => {
    currCost += +modification.cost
  })
  return currCost
}
