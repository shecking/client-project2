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
  $('#status-message').text(response.user.email + ' signed up successfully. Welcome to Practice Session Tracker!')
  $('.userfield').hide()
  navbarShowPassAndOut()
  sessionShow()
}

const onSignUpFailurePST = function (response) {
  setStatusFailure()
  $('#status-message').text('Error: PST sign up failed. Please try again.')
}

const onSignInSuccessPST = function (response) {
  store.user = response.user
  setStatusSuccess()
  $('#status-message').text(response.user.email + ' signed in to Practice Session Tracker.')
  $('.userfield').hide()
  navbarShowPassAndOut()
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
  $('.userfield').trigger('reset')
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
  if (showSessionsHtml) {
    $('.content').html(showSessionsHtml)
  } else {
    $('.content').text('No practice sessions to show')
  }
}

const onAllSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Error: could not show practice sessions. Please try again.')
  $('#status-message').show()
  $('.session-input').hide()
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

const editSessClick = function (id) {
  const date = $('#' + id + ' > .date').text().trim()
  const time = $('#' + id + ' > .time').text().trim()
  const practiceTime = $('#' + id + ' > .practice_time').text().trim()
  const notes = $('#' + id + ' > .notes').text().trim()

  store.editID = id
  // console.log($(".edit-session > fieldset > input[name='session[date]']").val())
  $(".edit-session > fieldset > input[name='session[date]']").val(date)
  $(".edit-session > fieldset > input[name='session[time]']").val(time)
  $(".edit-session > fieldset > input[name='session[practice_time]']").val(practiceTime)
  $(".edit-session > fieldset > input[name='session[notes]']").val(notes)

  $('#status-message').hide()
  $('.new-session').hide()
  $('.session-input').show()
  $('.edit-session').show()
}

const onEditSessSuccessPST = function (response) {
  store.session = response.session
  setStatusSuccess()
  $('#status-message').text('You\'ve successfully edited that practice session.')
  $('#status-message').show()
  $('.edit-session').trigger('reset')
  $('.edit-session').hide()
  $('.content').empty()
}

const onEditSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Unable to edit this practice session.')
  $('#status-message').show()
}

const onDeleteSessSuccessPST = function () {
  setStatusSuccess()
  $('#status-message').text('You\'ve successfully deleted that practice session.')
  $('#status-message').show()
  $('.content').empty()
}

const onDeleteSessFailurePST = function () {
  setStatusFailure()
  $('#status-message').text('Error: practice session not deleted. Please try again.')
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
