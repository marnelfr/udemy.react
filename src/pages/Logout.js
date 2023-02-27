import {removeAuthToken} from "../util/auth";
import {redirect} from "react-router-dom";

export const logoutAction = () => {
  removeAuthToken()
  return redirect('/')
}