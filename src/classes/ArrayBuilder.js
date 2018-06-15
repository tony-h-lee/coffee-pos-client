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

// Calculate the total cost of all currently selected items within this array
// Items contained in the array should have a cost field
ArrayBuilder.prototype.getSelectedCost = function () {
  let totalCost = 0
  this.selectedItems.map((item) => {
    if (item.cost) totalCost += +item.cost
  })
  return totalCost
}
