import {getAuthToken} from "../util/auth";

export const checkAuthLoader = () => {
  const token = getAuthToken()
  return token && token !== 'EXPIRED'
}