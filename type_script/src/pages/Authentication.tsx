import AuthForm from "../components/Auth/AuthForm";
import { ActionFunction, json } from "react-router-dom";

export const authAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const api = searchParams.get("mode") === "login" ? "login" : "signup";

  const loginInfo = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Can not login" }, { status: 500 });
  }

  return await response.json();
};

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
