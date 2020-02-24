'use strict'

let apiUrl
const apiUrls = {
  production: 'https://rails-api-project2.herokuapp.com/',
  development: 'localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
