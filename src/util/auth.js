export const setAuthToken = (token) => {
  localStorage.setItem('token', token)

  const expiration = new Date()
  expiration.setMinutes(expiration.getMinutes() + 6)
  localStorage.setItem('expiration', expiration.toISOString())
}

export const getAuthToken = () => {
  const expiration = new Date(localStorage.getItem('expiration'))
  const expirationDuration = expiration.getTime() - (new Date()).getTime()
  if(expirationDuration <= 0) {
    return 'EXPIRED'
  }
  return localStorage.getItem('token')
};

export const removeAuthToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
}

