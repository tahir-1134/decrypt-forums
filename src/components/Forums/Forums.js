import React, { useEffect, useState } from "react";
import "./Forums.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import Login from "./Login";
import { auth, db } from "./firebase";
import Friend from "./Friend";

function Forums() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="forums">
      {/* Header */}
      <Header />

      {user ? (
        <div className="forums__body">
          <Sidebar />
          <Feed />
          <div className="rightWidgets">
            <Friend />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Forums;
