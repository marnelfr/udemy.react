import Counter from './components/Section18.Revision/Counter';
import Auth from "./components/Section18.Revision/Auth";
import Header from "./components/Section18.Revision/Header";
import {useSelector} from "react-redux";
import UserProfile from "./components/Section18.Revision/UserProfile";


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
      <Header/>
      {isLoggedIn ? <UserProfile /> : <Auth/>}
      <Counter />
    </>
  );
}

export default App;
