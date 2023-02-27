import {redirect} from "react-router-dom";

export const setAuthToken = (token) => {
  localStorage.setItem('token', token)

  const expiration = new Date()
  expiration.setMinutes(expiration.getMinutes() + 1)
  localStorage.setItem('expiration', expiration.toISOString())
}

export const getExpirationDuration = () => {
  const expiration = new Date(localStorage.getItem('expiration'))
  return expiration.getTime() - (new Date()).getTime()
}

export const getAuthToken = () => {
  const expirationDuration = getExpirationDuration()
  if(expirationDuration <= 0) {
    return 'EXPIRED'
  }
  return localStorage.getItem('token')
};

export const removeAuthToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
}

export const checkAuthLoader = () => {
  const token = getAuthToken()
  if(token === 'EXPIRED' || !token) {
    return redirect('/auth?mode=login')
  }
  return null
}