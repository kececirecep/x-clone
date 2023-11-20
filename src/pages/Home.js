import React, { useEffect, useState } from 'react'
import Login from './Login'
import HomePage from './HomePage'
import { auth } from '../firebase';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log(authUser);
      } else {
        setUser(null)
      }
    })
  }, []);

  return (
    <div>
      {user ? <HomePage /> : <Login />}
    </div>
 
        
      
  )
}

export default Home