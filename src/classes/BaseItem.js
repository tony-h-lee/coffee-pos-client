/*
 * A base item object that has a name and an associated cost.
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
export function BaseItem (item) {
  this.id = item.id
  this.name = item.name
  this.cost = item.cost
  this.selected = item ? item.selected : false
}

// Toggle if this item is selected or unselected
BaseItem.prototype.toggle = function () {
  this.selected = !this.selected
}
