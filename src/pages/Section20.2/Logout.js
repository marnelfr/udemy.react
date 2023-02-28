import {removeAuthToken} from "../../util/Section20.2/auth";
import {redirect} from "react-router-dom";

export const logoutAction = () => {
  removeAuthToken()
  return redirect('/')
}