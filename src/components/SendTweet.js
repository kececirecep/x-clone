import React, { useState, useCallback, useEffect, useRef } from 'react';
import ProfileImg from '../images/profile.jpg'

import { RiQuillPenLine } from "react-icons/ri";

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../custom-hooks/useAuth';


const ref = collection(db, "posts")

const SendTweet = ({ inputFocused }) => {
  
  const user = useAuth();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputFocused) {
      inputRef.current.focus();
    }
  }, [inputFocused]);


  const [body, setBody] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    addDoc(ref, {
      body: body,
      photo: user.photoURL,
      displayName: user.displayName
    })
    setBody("")
  }, [body])

  if (!user) {
    return <div>Yükleniyor...</div>;
  }
  

  return (
    <div>
      <div onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
        <form className="flex">
          <img className="w-12 h-12 rounded-full mr-4" src={user?.photoURL} alt="Profil Resmi" />
          <div className="w-full">
            <textarea ref={inputRef}
              className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Neler oluyor?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-2">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 font-semibold flex items-center"><span className='text-xl'><RiQuillPenLine /></span>Tweetle</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SendTweet