import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { AnyAction } from "redux";
import config from "../utils/config";
import Auth from "../modeles/auth";
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

    if (response.status === 401) {
      dispatch(authActions.loginFailed());
    }

    if (!response.ok) {
      throw new Response(JSON.stringify({ message: "Can log the user in" }), {
        status: 500,
      });
    }

    const data = await response.json();
    const auth: Auth = {
      email: data.data.email,
      id: data.data.id,
      name: data.data.name,
      refresh_token: data.refresh_token,
      roles: data.data.roles,
      token: data.token,
    };

    localStorage.setItem("auth", JSON.stringify(auth));

    dispatch(authActions.login(auth));
  };
};

export const logoutUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    dispatch(authActions.logout());
  };
};

export const checkUserLoggedIn = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      dispatch(authActions.login(JSON.parse(auth)));
    }
  };
};
