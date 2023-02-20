import Counter from './components/Section18/Counter';
import Auth from "./components/Section18/Auth";
import Header from "./components/Section18/Header";
import {useSelector} from "react-redux";
import UserProfile from "./components/Section18/UserProfile";


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
      <Header />
      {isLoggedIn ? <UserProfile/> : <Auth/>}
      <Counter />
    </>
  );
}

export default App;
