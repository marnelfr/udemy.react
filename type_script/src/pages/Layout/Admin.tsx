import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import Header from "../../components/Layout/Admin/Header";
import { checkUserLoggedIn } from "../../thunks/auth";

const AdminLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserLoggedIn());

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [dispatch, isLoggedIn, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AdminLayout;
