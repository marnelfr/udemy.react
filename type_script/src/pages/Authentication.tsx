import AuthForm from "../components/Auth/AuthForm";
import { ActionFunction, json } from "react-router-dom";

export const authAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const loginInfo = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Can not login" }, { status: 500 });
  }

  const data = await response.json();
  console.log(data);
  return null;
};

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
