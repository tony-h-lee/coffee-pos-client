import BaseItem from './BaseItem';

/*
 * A base drink object that may have additional modifications.
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
function BaseDrink(item) {
  BaseItem.call(this, item);
  this.modifications = item.modifications;
}

BaseDrink.prototype = Object.create(BaseItem.prototype);
BaseDrink.prototype.constructor = BaseDrink;
