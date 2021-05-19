import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAD5n-tI8uph2BYX9KkHL-qs8-xUb-JEcw",
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
  const query = collection.orderBy('createdAt').limitToLast(5);
  const [messages] = useCollectionData(query, { idField:'id' });

  const [text, setText] = useState('');

  const saveMessage = (e) => {
    e.preventDefault();
    const {uid} = firebase.auth().currentUser;

    collection.add({
      text,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(() => setText(''))
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <div>
        {messages && messages.map((message) => {
          return <ChatMessage key={message.id} message={message}/>
        })}
      </div>
      <form onSubmit={saveMessage}>
        <input value={text} onChange={(e) => {setText(e.target.value)}} placeholder="write a message"></input>
        <button type="submit">Send</button>
      </form>
    </>
  );

}

const ChatMessage = ({ message }) => {

  const { text, uid } = message;
  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received'

  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );

}


const ChatApp = () => {

  const [user] = useAuthState(firebase.auth());

  return (
    <div className="chatapp">
      <h3>Chat App</h3>
      <div>
        {/* if there exists a logged in user, then show ChatRoom, otherwise, show SignIn */}
        {user ? <ChatRoom/> : <SignIn/>}
      </div>
      <SignOut/>
    </div>
  );

}


export default ChatApp;