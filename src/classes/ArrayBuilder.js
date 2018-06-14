/*
 * Converts JSON to a wrapper containing an array of wrapper items
 *
 * @param {wrapper} : object - A class to wrap around a single JSON item
 * @param {items} : array - An array of items retrieved as JSON from an API
 */
export function ArrayBuilder (Wrapper, items) {
  this.items = items.map((item) => new Wrapper(item))
  this.selectedItems = []
}

// Remove an item from the selectedItems array if it exists already,
// otherwise, add it to the array
ArrayBuilder.prototype.toggleItem = function (item) {
  if (this.selectedItems.indexOf(item) !== -1) {
    this.selectedItems = this.selectedItems
      .filter((selectedItem) => selectedItem.id !== item.id)
  } else {
    this.selectedItems = [...this.selectedItems, item]
  }
}

// Calculate the total cost of all currently selected items within this array
// Items contained in the array should have a cost field
ArrayBuilder.prototype.getSelectedCost = function () {
  let totalCost = 0
  this.selectedItems.map((item) => {
    if (item.cost) totalCost += +item.cost
  })
  return totalCost
}
