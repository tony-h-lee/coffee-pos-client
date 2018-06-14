import { ModificationBuilder } from './ModificationBuilder'

/*
 * Converts a shop JSON to a shop object with the shop name, items, and modifications
 *
 * @param {json} : object - A shop JSON retrieved from an API
 */
export function StoreBuilder (json) {
  this.id = json.id
  this.name = json.name
  this.items = json.items
  this.modifications = new ModificationBuilder(json.modifications)
}
