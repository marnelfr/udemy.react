import { useNavigate } from "react-router-dom";
import { logoutUser } from "../thunks/auth";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";

const LogoutPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
    navigate("/login");
  }, [dispatch, navigate]);

  return <></>;
};

export default LogoutPage;
