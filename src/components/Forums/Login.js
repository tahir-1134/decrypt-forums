import React, { useEffect, useState } from "react";
import "./Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { db, auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    if (!name) {
      return alert("Please enter your full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({ displayName: name, photoURL: profilePic })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
        db.collection("users").add({
          name: name,
          email: email,
          photoURL: profilePic,
          friends: [],
          comments: [],
          posts: [],
          id: userAuth.user.uid,
        });
      })
      .catch((error) => alert(error));
  };

  const [value, setValue] = useState("");
  function googleSignIn() {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__formHead">
          <h1>Decrypt</h1>
          <p>Grow together with the community</p>
        </div>
        <div className="login__formBody">
          <div className="login__formLeft">
            <p>
              By continuing you indicate that you agree with Decrypt’s Terms of
              Service and Privacy Policy
            </p>
            <button onClick={googleSignIn} className="login__formButton">
              <GoogleIcon /> <span>Continue with Google</span>
            </button>
            <button
              className="login__formButton"
              style={{ backgroundColor: "grey" }}
            >
              <FacebookIcon /> <span>(Unavailable)</span>
            </button>
          </div>
          <div className="login__formRight">
            <p>Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <p>Photo URL</p>
            <input
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              type="text"
              placeholder="Display Picture"
            />
            <p>Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <p>Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="login__formButton" onClick={loginToApp}>
              Login
            </button>
            <button className="login__formButton" onClick={register}>
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className="login__image" /> */}
    </div>
  );
}

export default Login;
