'use strict'

const config = require('./../config')
const store = require('./../store')

const signUpPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signInPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePasswordPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOutPST = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const allSessPST = function () {
  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newSessPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// known error in edit API call
const editSessPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + data.session.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// known error in delete API call
const deleteSessPST = function (sessionId) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + sessionId,
    method: 'DELETE',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUpPST,
  signInPST,
  changePasswordPST,
  signOutPST,
  allSessPST,
  newSessPST,
  editSessPST,
  deleteSessPST
}
