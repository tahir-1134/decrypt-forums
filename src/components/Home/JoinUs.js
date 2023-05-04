import React, { useEffect, useState } from "react";
import { db } from "../Forums/firebase";
import Navbar from "./Navbar";
import "./JoinUs.css";

function JoinUs() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState("");
  const [experience, setExperience] = useState("");


  function addJournalist(e) {
    e.preventDefault();

    db.collection("journalists").add({
      name: name,
      age: age,
      address: address,
      phone: phone,
      email: email,
      interests: interests,
      experience: experience,
    }).then(()=>{
        alert("Success!\nThank You for applying!\nWe look forward on working with you.")
    });

    setAddress('');
    setAge('');
    setEmail('');
    setExperience('');
    setInterests('');
    setName('');
    setPhone('');
  }

  return (
    <div className="journalist_data">
      <Navbar />
      <form className="journalist_form">
        <h2>ARE YOU A JOUNALIST?</h2>
        <p className="joinUs__label">Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="joinUs__element"
        />
        <p className="joinUs__label">Age</p>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          className="joinUs__element"
        />
        <p className="joinUs__label">Address</p>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="3"
          className="joinUs__textArea"
        />
        <p className="joinUs__label">Phone number</p>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          className="joinUs__element"
        />
        <p className="joinUs__label">Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="joinUs__element"
        />
        <p className="joinUs__label">Interest</p>
        <textarea
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          rows="2"
          className="joinUs__textArea"
        />
        <p className="joinUs__label">Experience</p>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows="3"
          className="joinUs__textArea"
        />
        <button className="joinUs__button joinUs__element" onClick={addJournalist}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default JoinUs;
