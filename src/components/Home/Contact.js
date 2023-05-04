import React, { useState } from "react";
import "./Contact.css";
import { db } from "../Forums/firebase";
import firebase from "firebase/compat/app";

function Contact() {

const [email, setEmail] = useState('');
const [query, setQuery] = useState('');


function submitQuery(){
  db.collection('queries').add({
    email: email,
    query: query,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).then(()=>{
    alert('Your query went through!!\nPlease wait while we do the needful.')
  })

  setEmail('');
  setQuery('');
}

  return (
    <div className="contact">
      <h2 className="contact__element">CONTACT US</h2>
      
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="contact__element" type="email" placeholder="Enter your email"></input>
      <textarea value={query} onChange={(e)=>{setQuery(e.target.value)}} className="contact__query contact__element" type="textarea" placeholder="Write your query. We will get back to you!"></textarea>
      <button onClick={submitQuery} className="contact__element">Submit</button>
    </div>
  );
}

export default Contact;
