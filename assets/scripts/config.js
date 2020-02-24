'use strict'

let apiUrl
const apiUrls = {
  production: 'https://rails-api-project2-production.herokuapp.com/',
  development: 'http://rails-api-project2.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
