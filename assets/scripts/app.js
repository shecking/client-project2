'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('.not-navbar').hide()
  $('#sign-up-nav').on('click', authEvents.signUpNavClick)
  $('#sign-in-nav').on('click', authEvents.signInNavClick)
  $('#sign-up').on('submit', authEvents.onSignUpPST)
  $('#sign-in').on('submit', authEvents.onSignInPST)
  $('#change-password-nav').on('click', authEvents.changePasswordNavClick).hide()
  $('#sign-out-nav').on('click', authEvents.onSignOutPST).hide()
  $('#change-password').on('submit', authEvents.onChangePasswordPST)
})
