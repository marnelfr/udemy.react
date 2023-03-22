import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { checkUserLoggedIn } from "../../thunks/auth";

const AdminLayout: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // check if the user is already logged in
    dispatch(checkUserLoggedIn());

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate, dispatch]);

  return (
    <>
      Admin layout
      <Outlet />
    </>
  );
};

export default AdminLayout;
