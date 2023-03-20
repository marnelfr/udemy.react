import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { AnyAction } from "redux";
import config from "../utils/config";
import { Auth } from "../modeles/auth";
import { authActions } from "../redux/auth";

export const loginUser = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response = await fetch(config.BACKEND_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Response(JSON.stringify({ message: "Can log the user in" }), {
        status: 500,
      });
    }

    const auth: Auth = await response.json();
    saveUserAuthInfo(auth);
    dispatch(authActions.login(auth));
  };
};

export const checkUserLoggedIn = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const refreshToken = localStorage.getItem("refreshToken");
    if (token && email && name && refreshToken) {
      const auth = {
        token,
        data: {
          id: 1,
          roles: [],
          email,
          name,
        },
        refresh_token: refreshToken,
        refresh_token_expiration: 23,
      };
      dispatch(authActions.login(auth));
    }
  };
};

export const logoutUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    dispatch(authActions.logout());
  };
};

const saveUserAuthInfo = (auth: Auth) => {
  localStorage.setItem("email", auth.data.email);
  localStorage.setItem("name", auth.data.name);
  localStorage.setItem("token", auth.token);
  localStorage.setItem("refreshToken", auth.refresh_token);
};
