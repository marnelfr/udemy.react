import EventForm from "../components/EventForm/EventForm";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NewEventPage = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/auth?mode=login");
    }
  }, [isLoggedIn, navigate]);

  return <EventForm method="post" />;
};

export default NewEventPage;
