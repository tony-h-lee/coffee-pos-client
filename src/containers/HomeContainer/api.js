import Mock from '../../mock/example_store'

// Import Request and set url here
// Return a fake request with mock data
export const getInventory = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock)
    }, 1000)
  })
}