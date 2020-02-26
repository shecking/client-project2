'use strict'

const moment = require('moment')

const time = function (str) {
  const formattedTime = moment.utc(str)
  return formattedTime.format('h:mm a')
}

module.exports = time
