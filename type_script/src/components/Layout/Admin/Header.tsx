import { MouseEventHandler, useCallback } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { logoutUser } from "../../../thunks/auth";

const Header: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();

  const logoutHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(logoutUser());
    },
    [dispatch]
  );

  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Header;
