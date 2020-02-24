'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

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
module.exports = {
  onSignUpPST,
  onSignInPST,
  onChangePasswordPST,
  onSignOutPST
}
