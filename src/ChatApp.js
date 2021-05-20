import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import API_KEY from '../config/config.js';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "chatapp-143c7.firebaseapp.com",
  projectId: "chatapp-143c7",
  storageBucket: "chatapp-143c7.appspot.com",
  messagingSenderId: "346314813970",
  appId: "1:346314813970:web:b23f9efb9345f8d5ffdecb"
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();


const SignIn = () => {

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <button onClick={googleSignIn}>Sign in with Google</button>
  );

}

const SignOut = () => {

  return (
    <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
  );
}

const ChatRoom = () => {

  const collection = firestore.collection('messages');
  const query = collection.orderBy('createdAt').limitToLast(10);
  const [messages] = useCollectionData(query, { idField:'id' });

  const [text, setText] = useState('');

  const saveMessage = (e) => {
    e.preventDefault();
    const {uid, photoURL} = firebase.auth().currentUser;

    collection.add({
      text,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL
    })
      .then(() => setText(''))
      .catch((err) => console.log(err.message));
  }

  const dummy = useRef();
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div>
      <div className="chatroom">
        {messages && messages.map((message) => {
          return <ChatMessage key={message.id} message={message}/>
        })}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={saveMessage}>
        <input value={text} onChange={(e) => {setText(e.target.value)}} placeholder="write a message"></input>
        {/* <button type="submit">Send</button> */}
      </form>
    </div>
  );

}

const ChatMessage = ({ message }) => {

  const { text, uid, photoURL } = message;
  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received'

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img className="profile-pic" src={photoURL}/>
        <p>{text}</p>
      </div>
    </>
  );

}


const ChatApp = () => {

  const [user] = useAuthState(firebase.auth());

  return (
    <Paper elevation={5} className="chatapp paper">
      <h3>Chat App</h3>
      <div>
        {/* if there exists a logged in user, then show ChatRoom, otherwise, show SignIn */}
        {user ? <ChatRoom/> : <SignIn/>}
      </div>
      <SignOut/>
    </Paper>
  );

}


export default ChatApp;