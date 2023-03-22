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
  return async (dispath) => {
    const response = await fetch(config.BACKEND_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

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

    dispath(authActions.login(auth));
  };
};
