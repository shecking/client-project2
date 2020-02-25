'use strict'

const store = require('./../store')
// const uiActions = require('./uiActions')

const setStatusSuccess = function () {
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('.resetfield').trigger('reset')
  $('#message').show()
}

const setStatusFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').show()
}

const navbarShowPassAndOut = function () {
  $('#change-password-nav').show()
  $('#sign-out-nav').show()
  $('#sign-up-nav').hide()
  $('#sign-in-nav').hide()
}

const navbarShowUpAndIn = function () {
  $('#change-password-nav').hide()
  $('#sign-out-nav').hide()
  $('#sign-up-nav').show()
  $('#sign-in-nav').show()
}

//
//
//
//

const signUpNavClick = function () {
  $('.not-navbar').hide()
  $('#message').hide()
  $('#sign-up').show()
}

const signInNavClick = function () {
  $('.not-navbar').hide()
  $('#message').hide()
  $('#sign-in').show()
}

const changePasswordNavClick = function () {
  $('.not-navbar').hide()
  $('#message').hide()
  $('#change-password').show()
}

const signOutNavClick = function () {
// JUST SIGN OUT
}

const onSignUpSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.not-navbar').hide()
  $('#message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
}

const onSignUpFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: PST sign up failed. Please try again.')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.not-navbar').hide()
  $('#message').text(response.user.email + ' signed in to Practice Session Tracker.')
}

const onSignInFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: PST sign in failed. Please try again.')
}

const onChangePasswordSuccessPST = function (response) {
  setStatusSuccess()
  $('.not-navbar').hide()
  $('#message').text('Password changed successfully.')
}

const onChangePasswordFailurePST = function (response) {
  setStatusFailure()
  $('#message').text('Error: password not changed. Please try again.')
}

const onSignOutSuccessPST = function (response) {
  store.user = null
  setStatusSuccess()
  $('.not-navbar').hide()
  $('#message').text('User signed out of Practice Session Tracker.')
  navbarShowUpAndIn()
}

const onSignOutFailureTTT = function (response) {
  setStatusFailure()
  $('#message').text('Error: user not signed out. Please try again.')
}

module.exports = {
  signUpNavClick,
  signInNavClick,
  changePasswordNavClick,
  signOutNavClick,
  onSignUpSuccessPST,
  onSignUpFailurePST,
  onSignInSuccessPST,
  onSignInFailurePST,
  onChangePasswordSuccessPST,
  onChangePasswordFailurePST,
  onSignOutSuccessPST,
  onSignOutFailureTTT
}
