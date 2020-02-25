'use strict'

const store = require('./../store')
// const uiActions = require('./uiActions')

const setStatusSuccess = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('.resetfield').trigger('reset')
  $('#status-message').css('visibility', 'visible')
}

const setStatusFailure = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').css('visibility', 'visible')
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

const sessionShowButtons = function () {
  $('.session').show()
}

const sessionHideButtons = function () {
  $('.session').hide()
}

//
//
//
//

const signUpNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.resetfield').hide()
  $('#sign-up').show()
}

const signInNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.resetfield').hide()
  $('#sign-in').show()
}

const changePasswordNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.resetfield').hide()
  $('#change-password').show()
}

const onSignUpSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.resetfield').hide()
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
  sessionShowButtons()
}

const onSignUpFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: PST sign up failed. Please try again.')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.resetfield').hide()
  $('#status-message').text(response.user.email + ' signed in to Practice Session Tracker.')
  sessionShowButtons()
}

const onSignInFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: PST sign in failed. Please try again.')
}

const onChangePasswordSuccessPST = function (response) {
  setStatusSuccess()
  $('.resetfield').hide()
  $('#status-message').text('Password changed successfully.')
}

const onChangePasswordFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: password not changed. Please try again.')
}

const onSignOutSuccessPST = function (response) {
  store.user = null
  sessionHideButtons()
  setStatusSuccess()
  $('.resetfield').hide()
  $('#status-message').text('User signed out of Practice Session Tracker.')
  navbarShowUpAndIn()
}

const onSignOutFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: user not signed out. Please try again.')
}

const onNewSessSuccessPST = function () {
  $('#status-message').hide()
}

const onNewSessFailurePST = function () {
  $('#status-message').hide()
}

const onEditSessSuccessPST = function () {
  $('#status-message').hide()
}

const onEditSessFailurePST = function () {
  $('#status-message').hide()
}

const onDeleteSessSuccessPST = function () {
  $('#status-message').hide()
}

const onDeleteSessFailurePST = function () {
  $('#status-message').hide()
}

module.exports = {
  signUpNavClick,
  signInNavClick,
  changePasswordNavClick,
  onSignUpSuccessPST,
  onSignUpFailurePST,
  onSignInSuccessPST,
  onSignInFailurePST,
  onChangePasswordSuccessPST,
  onChangePasswordFailurePST,
  onSignOutSuccessPST,
  onSignOutFailurePST,
  onNewSessSuccessPST,
  onNewSessFailurePST,
  onEditSessSuccessPST,
  onEditSessFailurePST,
  onDeleteSessSuccessPST,
  onDeleteSessFailurePST
}
