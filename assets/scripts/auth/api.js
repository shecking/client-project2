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

const editSessPST = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + store.editID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteSessPST = function (id) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + id,
    method: 'DELETE',
    headers: {
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
