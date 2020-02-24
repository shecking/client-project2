'use strict'

const store = require('./../store')
// const uiActions = require('./uiActions')

const onSignUpSuccessPST = function (response) {
  store.user = response.user
}

const onSignUpFailurePST = function (response) {

}

const onSignInSuccessPST = function (response) {
  store.user = response.user
}

const onSignInFailurePST = function (response) {

}

const onChangePasswordSuccessPST = function (response) {

}

const onChangePasswordFailurePST = function (response) {

}

const onSignOutSuccessPST = function (response) {
  store.user = null
}

const onSignOutFailureTTT = function (response) {

}

module.exports = {
  onSignUpSuccessPST,
  onSignUpFailurePST,
  onSignInSuccessPST,
  onSignInFailurePST,
  onChangePasswordSuccessPST,
  onChangePasswordFailurePST,
  onSignOutSuccessPST,
  onSignOutFailureTTT
}
