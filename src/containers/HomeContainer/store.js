import { StoreBuilder } from '@/classes/StoreBuilder'

export default {
  state: {
    shopData: new StoreBuilder(),
    selectedItem: false,
    currentOrder: false,
    selectedModifications: []
  }
}
