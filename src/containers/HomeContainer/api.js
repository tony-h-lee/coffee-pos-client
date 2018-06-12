import Mock from '../../mock/example_store'

// Import Request service and set url here
// Return a fake request with mock data
export const getShopData = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock)
    }, 2000)
  })
}
