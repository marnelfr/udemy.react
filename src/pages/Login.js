import {getAuthToken} from "../util/auth";

export const authLoader = () => {
  const token = getAuthToken()
  return token && token !== 'EXPIRED'
}