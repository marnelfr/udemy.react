import { ActionFunction, redirect } from "react-router-dom";

export const logoutAction: ActionFunction = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
};
