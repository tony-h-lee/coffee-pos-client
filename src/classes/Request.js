import axios from 'axios'

// Add request methods here
const GET = 'GET'
const PUT = 'PUT'
const POST = 'POST'
const DELETE = 'DELETE'

/*
 * A base API Service wrapper for Axios.
 *
 * @param {item} : object - Any particular item within a store's inventory.
 */
export const Request = function (url, options) {
  this.url = url
  this.body = options.body ? options.body : {}
  this.method = GET
  this.headers = options.header ? options.header : {}
  this.token = null
}

/*
 * Set a token to this service instance retrieved from authorization.
 *
 * @param {token} : string - JWT retrieved from successful authentication.
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setToken = function (token) {
  this.token = token
  return this
}

/*
 * Remove a token from this service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.removeToken = function () {
  this.headers.authorization = null
  this.token = null
  return this
}

/*
 * Set an endpoint for this service instance to call.
 *
 * @param {url} : string - An endpoint location for the service to call.
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setUrl = function (url) {
  this.url = url
  return this
}

/*
 * Set body options for this service instance.
 *
 * @param {body} : object - Data to attach to the Request.
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setBody = function (data) {
  this.body = data
  return this
}

/*
 * Add a header to this service instance.
 *
 * @param {header} : object - A header for HTTP.
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.addHeader = function (header) {
  this.headers = Object.assign(this.headers, header)
  return this
}

/*
 * Add credentials for basic authentication.
 *
 * @param {id} : string - A unique identifier for the object being authenticated.
 * @param {password} : string - The password for the authenticating account.
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.addBasicCredentials = function (id, password) {
  this.headers = Object.assign(this.headers,
    { Authorization: `Basic ${Buffer.from(`${id}:${password}`).toString('base64')}` })
  return this
}

/*
 * Set method to GET for this service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setGet = function () {
  this.method = GET
  this.body = null
  return this
}

/*
 * Set method to PUT for this service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setPut = function () {
  this.method = PUT
  return this
}

/*
 * Set method to POST for this service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setPost = function () {
  this.method = POST
  return this
}

/*
 * Set method to DELETE for this service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.setDelete = function () {
  this.method = DELETE
  return this
}

/*
 * Return response from API accordingly.
 *
 * @return {Promise.resolve()} : object - Return API response json on request success.
 *         {Promise.reject()} : object - Return API response error status on request failure.
 */
Request.prototype.checkAndParse = function (response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response.json())
  }
  const error = new Error(response.statusText)
  error.response = response
  error.message = response.message
  return Promise.reject(response.status)
}

/*
 * Call the HTTP request with url attached to the service instance.
 *
 * @return {this} : object - return the Request object for chaining.
 */
Request.prototype.go = function () {
  axios({
    method: this.method,
    url: this.url,
    data: this.body
  })
    .then(this.checkAndParse)
}
