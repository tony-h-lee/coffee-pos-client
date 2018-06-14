import { ModificationItem } from './ModificationItem'
import { ArrayBuilder } from './ArrayBuilder'

/*
 * Converts JSON to a wrapper containing modification objects
 *
 * @param {modifications} : array - An array of modifications that belong to one or more items
 */
export function ModificationBuilder (modifications) {
  ArrayBuilder.call(this, ModificationItem, modifications)
}

ModificationBuilder.prototype = Object.create(ArrayBuilder.prototype)
ModificationBuilder.prototype.constructor = ModificationBuilder

// If an item is selected, return an array of ModificationItems if they belong to the item in the parameter
// otherwise, return an empty array
ModificationBuilder.prototype.filteredModifications = function (item) {
  return item ? this.items.filter((modification) => modification.to.some((to) => to.id === item.id))
    : []
}

ModificationBuilder.prototype.resetSelected = function () {
  this.selectedItems.map((modification) => {
    modification.selected = false
  })
  this.selectedItems = []
}
