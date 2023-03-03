import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { authActions } from "../redux/auth/auth-slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return <h1>Home page</h1>;
};

export default HomePage;
