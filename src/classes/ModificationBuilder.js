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
