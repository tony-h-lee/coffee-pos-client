import { BaseItem } from './BaseItem'

/*
 * A modification item with a name, cost, and an array of items this modification can be applied to
 *
 * @param {modification} : object - A single modification JSON that is converted to a Modification item object.
 */
export function ModificationItem (modification) {
  BaseItem.call(this, modification)
  this.selected = false
  this.to = modification.to
}

ModificationItem.prototype = Object.create(BaseItem.prototype)
ModificationItem.prototype.constructor = ModificationItem

// Toggle if this modification is selected or unselected for display
ModificationItem.prototype.toggle = function () {
  this.selected = !this.selected
}
