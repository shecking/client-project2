'use strict'

const store = require('./../store')
// const uiActions = require('./uiActions')

const setStatusSuccess = function () {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('.resetfield').trigger('reset')
  // $('#message').show()
}

const setStatusFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  // $('#message').show()
}

const showPassAndOut = function () {
  $('.change-password').show()
  $('.sign-out').show()
  $('.sign-up').hide()
  $('.sign-in').hide()
}

const showUpAndIn = function () {
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.sign-up').show()
  $('.sign-in').show()
}
//
//
//
//

const onSignUpSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  $('#message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
  showPassAndOut()
}

const onSignUpFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: PST sign up failed. Please try again.')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  $('#message').text(response.user.email + ' signed in to Practice Session Tracker.')
  showPassAndOut()
}

const onSignInFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: PST sign in failed. Please try again.')
}

const onChangePasswordSuccessPST = function (response) {
  setStatusSuccess()
  $('#message').text('Password changed successfully.')
}

const onChangePasswordFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: password not changed. Please try again.')
}

const onSignOutSuccessPST = function (response) {
  store.user = null
  setStatusSuccess()
  $('#message').text('User signed out of Practice Session Tracker.')
  showUpAndIn()
}

const onSignOutFailureTTT = function (response) {
  setStatusFailure()
  $('#message').text('Error: user not signed out. Please try again.')
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
