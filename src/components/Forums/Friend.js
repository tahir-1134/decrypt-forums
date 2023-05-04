import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import "./Friend.css";
import AddIcon from "@mui/icons-material/Add";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Friend() {
  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);
  // console.log(user);
  let friendSuggestions = null;
  // Fetching users
  useEffect(() => {
    db.collection("users")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // getting current user from database
  const currentUser = users.filter((e) => {
    return e.data.authId === user.uid;
  })[0];

  // removing already friends
  currentUser?.data?.friends?.forEach((friend) => {
    friendSuggestions = users.filter((e) => {
      return e.id !== friend.id;
    });
  });
  // removing current user before rendering friends list
  friendSuggestions = users.filter((e) => {
    return e.data.authId !== user.uid;
  });

  // console.log(currentUser?.id);
  // adding friends
  const addFriend = (target) => {
    // Check if already a friend
    let friendCheck = false;
    currentUser?.data.friends.forEach((element) => {
      if (element.id === target.id) friendCheck = true;
    });
    // if not friend then add
    if (!friendCheck) {
      const userRef = db.collection("users").doc(currentUser?.id);
      userRef.update({
        friends: [...currentUser?.data.friends, target],
      });
    }
  };

  // console.log(friendSuggestions);

  return (
    <div className="friend">
      <h3>Add Friend</h3>
      <div className="userList">
        {friendSuggestions.map((user) => (
          <div key={user.id} className="user">
            <Avatar className="userAvatar" src={user.data.photoURL} />
            <div className="userInfo">
              <p>{user.data.name}</p>
              <p>{user.data.email}</p>
            </div>
            <AddIcon
              className="addFriend"
              onClick={() => {
                addFriend(user);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friend;
