import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageInput, setImageInput] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

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

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user?.photoURL || "",
      media: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      comments: [],
      likes: [],
      op: currentUser,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <form>
          <div className="feed__input">
            <CreateIcon />
            <input
              className="form__input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Create a thread!"
            />
            {!imageInput && (
              <button className="form__button" onClick={sendPost} type="submit">
                Send
              </button>
            )}
          </div>
          {imageInput && (
            <div className="feed__input feed__inputImage">
              <AddPhotoAlternateIcon />
              <input
                className="form__input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                type="text"
                placeholder="Enter Image URL"
              />
              <button className="form__button" onClick={sendPost} type="submit">
                Send
              </button>
            </div>
          )}
        </form>
        <div className="feed__inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9D"
            onClick={() => {
              setImageInput(!imageInput);
            }}
          />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#526BF8" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(
          ({
            id,
            data: {
              name,
              description,
              message,
              photoURL,
              media,
              timestamp,
              comments,
              likes,
            },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
              media={media}
              timestamp={timestamp}
              comments={comments}
              likes={likes}
            />
          )
        )}
      </FlipMove>
      <Post
        key={12}
        name={"Dummy Post"}
        description={"dummypost@gmail.com"}
        message={"Message for dummy post!!"}
        photoURL={
          "https://miro.medium.com/max/1400/1*y_uyQN1xEjppGVWJJkibMQ.jpeg"
        }
        media={
          "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        }
        timestamp={'12 days ago'}
        comments={[]}
        likes={[]}
      />
    </div>
  );
}

export default Feed;
