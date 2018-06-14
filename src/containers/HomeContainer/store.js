import { StoreBuilder } from '@/classes/StoreBuilder'
import { OrderBuilder } from '@/classes/OrderBuilder'

export default {
  state: {
    shopData: new StoreBuilder(),
    selectedItem: false,
    currentOrder: new OrderBuilder(),
    selectedModifications: []
  }
}
