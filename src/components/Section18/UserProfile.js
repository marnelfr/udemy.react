import classes from './UserProfile.module.css';
import {useSelector} from "react-redux";

const UserProfile = () => {
  const email = useSelector(state => state.auth.user.email)
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>{email}</p>
    </main>
  );
};

export default UserProfile;
