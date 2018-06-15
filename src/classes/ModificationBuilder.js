import { ModificationItem } from './ModificationItem'
import { ArrayBuilder } from './ArrayBuilder'

/*
 * Converts JSON to a wrapper containing modification objects
 *
 * @param {modifications} : array - An array of modifications that belong to one or more items
 */
export function ModificationBuilder (modifications = []) {
  ArrayBuilder.call(this, ModificationItem, modifications)
}

ModificationBuilder.prototype = Object.create(ArrayBuilder.prototype)
ModificationBuilder.prototype.constructor = ModificationBuilder

// Remove an item from the selectedItems array if it exists already,
// otherwise, add it to the array
ModificationBuilder.prototype.toggleItem = function (modificationItem) {
  if (this.selectedItems.indexOf(modificationItem) !== -1) {
    this.selectedItems = this.selectedItems
      .filter((selectedItem) => selectedItem.id !== modificationItem.id)
  } else {
    this.selectedItems = [...this.selectedItems, modificationItem]
  }
}

// If an item is selected, return an array of ModificationItems if they belong to the item in the parameter
// otherwise, return an empty array
ModificationBuilder.prototype.filteredModifications = function (modificationItem) {
  return modificationItem ? this.items
    .filter((modification) => modification.to.some((to) => to.id === modificationItem.id))
    : []
}

// Unselect all currently selected Modifications and clear the array of selected modifications if the item clicked
// is not the same item as the currently selected item
ModificationBuilder.prototype.resetSelected = function (previousSelected, currentSelected) {
  if (previousSelected.id !== currentSelected.id) {
    this.selectedItems.map((modification) => {
      modification.selected = false
    })
    this.selectedItems = []
  }
}

// Unselect all currently selected Modifications after adding selected InventoryItem to order
ModificationBuilder.prototype.resetAfterOrder = function () {
  this.selectedItems.map((modification) => {
    modification.selected = false
  })
  this.selectedItems = []
}
