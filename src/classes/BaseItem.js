/*
 * A base item object that has a name and an associated cost.
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
function BaseItem(item) {
  this.name = item.name;
  this.cost = item.cost;
}

Object.defineProperty(BaseItem, 'name', {
  get: function() {
    return this.name;
  },
  set: function(name) {
    this.name = name;
  }
});
