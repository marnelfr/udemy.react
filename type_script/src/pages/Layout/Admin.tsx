import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

const AdminLayout: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      Admin layout
      <Outlet />
    </>
  );
};

export default AdminLayout;