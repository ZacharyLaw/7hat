'use client'
import React, { useState, useEffect, Fragment, useContext } from 'react';
import db from './firebase';
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
 export  default function Fire(){
  const colletionRef = collection(db, 'chat');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [chats, setChat] = useState([]);

  useEffect(() => {
    const q = query(
      colletionRef,
    );
    setLoading(true);
    const unsub = onSnapshot(colletionRef, (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setChat(items);
    setLoading(false);
  });
    return () => {
      unsub();
    };
  }, []);//useEffect
  async function addMsg() {
    const newChat = {
      msg,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };
    try {
      const chatRef = doc(colletionRef, newChat.id);
      await setDoc(chatRef, newChat);
    } catch (error) {
      console.error(error);
    }
  }//addChat



  return (
    <aside>
         {chats.map((chat)=>(
          <h2 className="chat" key={chat.id}>{chat.msg}</h2>
      ))}
      <div className="inputBox">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Msg"
        />
        <button onClick={() => addMsg()}>Submit</button>
      </div>
   
    </aside>
  )
}