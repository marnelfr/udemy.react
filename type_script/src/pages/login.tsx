import PageCard from "../components/UI/PageCard/PageCard";
import Auth from "../components/Auth/Auth";
import { ActionFunction, json } from "react-router-dom";

export const loginAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw json(
      { message: "Can not log the user in for the moment" },
      { status: 500 }
    );
  }

  const data = await response.json();
  //data.token
  // which backend I'm gonna use?
};

const LoginPage = () => (
  <PageCard>
    <h2>Admin Space</h2>
    <Auth />
  </PageCard>
);

export default LoginPage;
