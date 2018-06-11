/*
 * Return an object with generic fields associated with a container's async states.
 *
 * @param {data} String - The field containing a data payload from an async operation.
 */
export default {
  data: function (dataField) {
    return {
      loading: false,
      error: false,
      [dataField]: false
    }
  }
}
