/*
 * A base item object that has a name and an associated cost.
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
export function BaseItem (item) {
  this.name = item.name
  this.cost = item.cost
}
