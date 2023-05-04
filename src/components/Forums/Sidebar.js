import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "./firebase";
import "./Sidebar.css";

function Sidebar() {
  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);
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
  const currentUser = users?.filter((e) => {
    return e.data.authId === user.uid;
  })[0];
  

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user?.photoURL} />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Friends</p>
          <p className="sidebar__statNumber">{currentUser?.data?.friends?.length}</p>
        </div>
        <div className="sidebar__stat">
          <p>Threads</p>
          <p className="sidebar__statNumber">{currentUser?.data.posts.length}</p>
        </div>
        <div className="sidebar__stat">
          <p>Comments</p>
          <p className="sidebar__statNumber">{currentUser?.data.comments.length}</p>
        </div>
        <div className="sidebar__stat">
          <p>Liked Posts</p>
          <p className="sidebar__statNumber">{currentUser?.data.comments.length}</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("development")}
        {recentItem("internship")}
      </div>
    </div>
  );
}

export default Sidebar;
