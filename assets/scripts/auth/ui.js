'use strict'

const store = require('./../store')
const showSessionsTemplate = require('../templates/session-listing.handlebars')
// const uiActions = require('./uiActions')

const setStatusSuccess = function () {
  $('#status-message').removeClass()
  $('#status-message').addClass('success-message')
  $('.userfield').trigger('reset')
  $('#status-message').css('visibility', 'visible')
}

const setStatusFailure = function () {
  $('.content').empty()
  $('#status-message').removeClass()
  $('#status-message').addClass('failure-message')
  $('#status-message').css('visibility', 'visible')
}

const navbarShowPassAndOut = function () {
  $('#change-password-nav').show()
  $('#sign-out-nav').show()
  $('#sign-up-nav').hide().trigger('reset')
  $('#sign-in-nav').hide().trigger('reset')
}

const navbarShowUpAndIn = function () {
  $('#change-password-nav').hide().trigger('reset')
  $('#sign-out-nav').hide()
  $('#sign-up-nav').show()
  $('#sign-in-nav').show()
}

const sessionShow = function () {
  $('.session-buttons').show()
}

const sessionHide = function () {
  $('.session-buttons').hide()
  $('.session-input').hide()
  $('.content').empty()
}
//
//
//
//

const signUpNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.userfield').hide()
  $('#sign-up').show()
}

const signInNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.userfield').hide()
  $('#sign-in').show()
}

const changePasswordNavClick = function () {
  $('#status-message').css('visibility', 'hidden')
  $('.userfield').hide()
  sessionHide()
  $('#change-password').show()
}

const onSignUpSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.userfield').hide()
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
  sessionShow()
}

const onSignUpFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: PST sign up failed. Please try again.')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  navbarShowPassAndOut()
  $('.userfield').hide()
  $('#status-message').text(response.user.email + ' signed in to Practice Session Tracker.')
  sessionShow()
}

const onSignInFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: PST sign in failed. Please try again.')
}

const onChangePasswordSuccessPST = function (response) {
  setStatusSuccess()
  $('#status-message').text('Password changed successfully.')
  $('.userfield').hide()
  sessionShow()
}

const onChangePasswordFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: password not changed. Please try again.')
}

const onSignOutSuccessPST = function (response) {
  store.user = null
  sessionHide()
  setStatusSuccess()
  $('.userfield').hide()
  $('#status-message').text('User signed out of Practice Session Tracker.')
  navbarShowUpAndIn()
}

const onSignOutFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: user not signed out. Please try again.')
}

const onAllSessSuccessPST = function (data) {
  setStatusSuccess()
  $('#status-message').text('Here are all your practice sessions.')
  $('#status-message').show()
  $('.session-input').hide()
  const showSessionsHtml = showSessionsTemplate({ sessions: data.sessions })
  $('.content').html(showSessionsHtml)
}

const onAllSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Error: could not show practice sessions. Please try again.')
  $('#status-message').show()
}

const newSessClick = function () {
  $('.content').empty()
  $('#status-message').hide()
  $('.session-input').show()
  $('.new-session').show()
  $('.edit-session').hide()
}

const onNewSessSuccessPST = function (response) {
  store.session = response.session
  setStatusSuccess()
  $('#status-message').text('You\'ve successfully logged your practice session.')
  $('#status-message').show()
  $('.new-session').trigger('reset')
  $('.new-session').hide()
}

const onNewSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Unable to create new practice session.')
  $('#status-message').show()
}

const editSessClick = function () {
  $('#status-message').hide()
  $('.session-input').show()
  $('.edit-session').show()
  $('.new-session').hide()
}

const onEditSessSuccessPST = function (response) {
  store.session = response.session
  setStatusSuccess()
  $('#status-message').text('You\'ve successfully edited this practice session.')
  $('#status-message').show()
  $('.edit-session').trigger('reset')
  $('.edit-session').hide()
}

const onEditSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Unable to edit this practice session.')
  $('#status-message').show()
}

const onDeleteSessSuccessPST = function (response) {
  store.session = response.session
  $('#status-message').text('You\'ve successfully deleted this practice session.')
  $('#status-message').show()
}

const onDeleteSessFailurePST = function () {
  $('#status-message').show()
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
  onAllSessSuccessPST,
  onAllSessFailurePST,
  newSessClick,
  onNewSessSuccessPST,
  onNewSessFailurePST,
  editSessClick,
  onEditSessSuccessPST,
  onEditSessFailurePST,
  onDeleteSessSuccessPST,
  onDeleteSessFailurePST
}
