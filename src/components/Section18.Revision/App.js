import Counter from './Counter';
import Auth from "./Auth";
import Header from "./Header";
import {useSelector} from "react-redux";
import UserProfile from "./UserProfile";


function ReduxCounterApp() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
      <Header/>
      {isLoggedIn ? <UserProfile /> : <Auth/>}
      <Counter />
    </>
  );
}

export default ReduxCounterApp;
