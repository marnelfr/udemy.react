import styles from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";
import React from "react";

const UserList = props => {
  return (
    <ul className={styles.userList}>
      {props.users.map(user => <UserItem key={user.id} name={user.username} age={user.year} />)}
    </ul>
  )
}

export default UserList