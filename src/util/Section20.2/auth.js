import {redirect} from "react-router-dom";

export const setAuthToken = token => {
  localStorage.setItem('token', token)

  const expiration = new Date()
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem('expiration', expiration.toISOString())
}

export const getTokenDuration = () => {
  const expiration = localStorage.getItem('expiration')
  const expirationDate = new Date(expiration)
  const currentDate = new Date()
  return expirationDate.getTime() - currentDate.getTime()
}

export const getAuthToken = () => {
  const duration = getTokenDuration()
  if(duration <= 0) {
    return 'EXPIRED';
  }
  return localStorage.getItem('token')
}

export const removeAuthToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
}

export const tokenLoader = () => {
  return getAuthToken()
}

export const checkAuthLoader = () => {
  const token = getAuthToken()

  if(!token) {
    return redirect('/auth?mode=login')
  }

  return null
}