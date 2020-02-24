'use strict'

const store = require('./../store')
// const uiActions = require('./uiActions')

const onSignUpSuccessPST = function (response) {
  store.user = response.user
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailurePST = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Error: PST sign up failed. Please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text(response.user.email + ' signed in to Practice Session Tracker.')
  $('#sign-in').trigger('reset')
}

const onSignInFailurePST = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Error: PST sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccessPST = function (response) {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Password changed successfully.')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailurePST = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Error: password not changed. Please try again.')
  $('#change-password').trigger('reset')
}

const onSignOutSuccessPST = function (response) {
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').show()
  $('#message').text('User signed out of Practice Session Tracker.')
}

const onSignOutFailureTTT = function (response) {
  $('#message').text('Error: user not signed out. Please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
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
