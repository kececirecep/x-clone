import React from 'react'; 
import ProfileImg from '../images/profile.jpg'
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet,AiOutlineHeart } from "react-icons/ai";
 
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {collection,query, orderBy} from 'firebase/firestore'
import {db} from '../firebase'

const ref = collection(db,'posts')

const orderedRef = query(ref, orderBy('timestamp', 'desc'));

const Tweets = () => {
  

  const [data, isLoading] = useCollectionData(orderedRef);

  if(isLoading){
    return <h1>Loading...</h1>
  }
  console.log(data);

  


    return (
        <div className="max-w-2xl mx-auto mt-4"> 
        {data && data.map((post)=>{
            return(
              <div className="bg-white p-4 border-b border-gray-200"> 
          <div className="flex items-center">
            <img src={post.photo} alt="Profile Picture" className="w-12 h-12 rounded-full mr-2" />
            <div className='flex items-center gap-2'>
              <span className="font-bold">{post.displayName}</span>
            </div>
          </div>
          <div className="mt-2">
            <p>{post.body}</p>
          </div>  
        </div>
            )
          })
        }
      </div>
      
    )
  }

export default Tweets