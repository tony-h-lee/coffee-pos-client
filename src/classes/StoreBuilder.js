import { ModificationBuilder } from './ModificationBuilder'
import { InventoryBuilder } from './InventoryBuilder'

/*
 * Initialize a shop object with the empty shop name, items, and modifications
 */
export function StoreBuilder () {
  this.id = null
  this.name = null
  this.items = null
  this.modifications = null
}

// Set shop fields from retrieved shop JSON via API
StoreBuilder.prototype.setData = function (json) {
  this.id = json.id
  this.name = json.name
  this.items = new InventoryBuilder(json.items)
  this.modifications = new ModificationBuilder(json.modifications)
}

StoreBuilder.prototype.isSet = function () {
  return this.id !== null
}
