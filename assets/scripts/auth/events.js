'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const signUpNavClick = function (event) {
  event.preventDefault()
  ui.signUpNavClick()
}

const signInNavClick = function (event) {
  event.preventDefault()
  ui.signInNavClick()
}

const changePasswordNavClick = function (event) {
  event.preventDefault()
  ui.changePasswordNavClick()
}

const signOutNavClick = function (event) {
  event.preventDefault()
  ui.signOutNavClick()
}

const onSignUpPST = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUpPST(data)
    .then(function (response) {
      return api.signInPST(data)
    })
    .then(ui.onSignUpSuccessPST)
    .catch(ui.onSignUpFailurePST)
}

const onSignInPST = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signInPST(data)
    .then(ui.onSignInSuccessPST)
    .catch(ui.onSignInFailurePST)
}

const onChangePasswordPST = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePasswordPST(data)
    .then(ui.onChangePasswordSuccessPST)
    .catch(ui.onChangePasswordFailurePST)
}

const onSignOutPST = function (event) {
  event.preventDefault()
  api.signOutPST()
    .then(ui.onSignOutSuccessPST)
    .catch(ui.onSignOutFailurePST)
}

const onAllSessClick = function (event) {
  event.preventDefault()
  api.allSessPST()
    .then(ui.onAllSessSuccessPST)
    .catch(ui.onAllSessFailurePST)
}

const onNewSessClick = function (event) {
  event.preventDefault()
  api.newSessPST()
    .then(ui.onNewSessSuccessPST)
    .catch(ui.onNewSessFailurePST)
}

const onEditSessClick = function (event) {
  event.preventDefault()
  api.editSessPST()
    .then(ui.onEditSessSuccessPST)
    .catch(ui.onEditSessFailurePST)
}

const onDeleteSessClick = function (event) {
  event.preventDefault()
  api.deleteSessPST()
    .then(ui.onDeleteSessSuccessPST)
    .catch(ui.onDeleteSessFailurePST)
}

module.exports = {
  signUpNavClick,
  signInNavClick,
  changePasswordNavClick,
  signOutNavClick,
  onSignUpPST,
  onSignInPST,
  onChangePasswordPST,
  onSignOutPST,
  onAllSessClick,
  onNewSessClick,
  onEditSessClick,
  onDeleteSessClick
}
