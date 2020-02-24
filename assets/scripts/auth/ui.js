'use strict'

<<<<<<< HEAD
// const store = require('./../store')
// const uiActions = require('./uiActions')

const onSignUpSuccessPST = function (response) {

=======
const store = require('./../store')
// const uiActions = require('./uiActions')

const onSignUpSuccessPST = function (response) {
  store.user = response.user
>>>>>>> writing
}

const onSignUpFailurePST = function (response) {

}

const onSignInSuccessPST = function (response) {
<<<<<<< HEAD

=======
  store.user = response.user
>>>>>>> writing
}

const onSignInFailurePST = function (response) {

}

const onChangePasswordSuccessPST = function (response) {

}

const onChangePasswordFailurePST = function (response) {

}

const onSignOutSuccessPST = function (response) {
<<<<<<< HEAD

=======
  store.user = null
>>>>>>> writing
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
