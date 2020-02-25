'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#status-message').css('visibility', 'hidden')
  $('.resetfield').hide()
  $('.session-buttons').hide()
  $('#sign-up-nav').on('click', authEvents.signUpNavClick)
  $('#sign-in-nav').on('click', authEvents.signInNavClick)
  $('#sign-up').on('submit', authEvents.onSignUpPST)
  $('#sign-in').on('submit', authEvents.onSignInPST)
  $('#change-password-nav').on('click', authEvents.changePasswordNavClick).hide()
  $('#sign-out-nav').on('click', authEvents.onSignOutPST).hide()
  $('#change-password').on('submit', authEvents.onChangePasswordPST)
  $('#all-sess').on('click', authEvents.onAllSessClick)
  $('#new-sess').on('click', authEvents.onNewSessClick)
  $('#edit-sess').on('click', authEvents.onEditSessClick)
  $('#delete-sess').on('click', authEvents.onDeleteSessClick)
})
