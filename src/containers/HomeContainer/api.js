import Mock from '../../mock/example_store'

// Import Request service and set url here
// Return a fake request with mock data
export const getShopData = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock)
    }, 1000)
  })
}

// Import Request service and set url here
// Return a fake request with mock data
// Parse OrderBuilder into a JSON body to send to an API
export const createOrder = function (order) {
  let body = parseOrder(order)
  console.log('Your Order: \n')
  console.log(body)
  console.log('\n\n')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(200)
    }, 1000)
  })
}

const parseOrder = (order) => {
  let json = {}
  json.orderDate = Date.now()
  json.items = order.items.map((orderItem) =>
    Object.assign({},
      {
        name: orderItem.item.name,
        cost: orderItem.item.cost,
        modifications: orderItem.modifications.map((modificationItem) =>
          Object.assign({}, { name: modificationItem.name, cost: modificationItem.cost, to: modificationItem.to }))
      }
    )
  )
  return json
}
