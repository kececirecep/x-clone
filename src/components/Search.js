import React from 'react'
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className='w-[350px] bg-gray-100 p-2 rounded-full '>
        <span className='flex items-center gap-2 text-gray-600'><BiSearch/><input type="text" placeholder='Ara' className='border-none outline-none bg-transparent ' /></span>
    </div>
  )
}

export default Search