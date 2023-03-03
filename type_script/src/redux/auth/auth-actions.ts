import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AnyAction } from "redux";
import { authActions } from "./auth-slice";

export const loadAuthFromLocalStorage = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const expiration = localStorage.getItem("expiration");
      dispatch(authActions.setToken({ token, expiration }));
    } else {
      dispatch(authActions.logout());
    }
  };
};

export const logUserIn = (
  token: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    localStorage.setItem("token", token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    const expirationString = expiration.toISOString();
    localStorage.setItem("expiration", expirationString);

    dispatch(authActions.setToken({ token, expiration: expirationString }));
  };
};

export const logUserOut = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    dispatch(authActions.logout());
  };
};
