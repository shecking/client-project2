'use strict'

const moment = require('moment')

const date = function (str) {
  const formattedDate = moment(str)
  return formattedDate.format('MMMM Do YYYY')
}

module.exports = date
