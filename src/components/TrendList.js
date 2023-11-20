
import Search from './Search'

import { BsThreeDots } from "react-icons/bs";



const TrendList = () => {
  return (
    <div className='w-[400px] flex flex-col justify-center items-center'>
        <div>
        <Search/>
        <nav className='mt-4 bg-gray-100 rounded-2xl mb-4'>
          <h2 className='font-bold text-xl px-4 py-4'>İlginizi çekebilecek gündemler</h2>
          <ul className='mt-4 pb-4'>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Alex de Souza <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Cristiano Ronaldo <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Doktor <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Kolombiya <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#İsmail Kartal <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          <li className='font-bold text-md py-4 hover:bg-gray-200 px-4 cursor-pointer flex justify-between items-center'>#Arda Güler <span className='hover:bg-blue-200 hover:text-blue-600 p-2 rounded-full'><BsThreeDots/></span></li>
          </ul>
        </nav>
        </div>
    </div>
  )
}

export default TrendList