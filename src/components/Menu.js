import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import useAuth from "../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

import { RiTwitterXFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { TbMail } from "react-icons/tb";
import { CgLoadbarDoc, CgMoreO } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { RiQuillPenLine } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
 

const Menu = ({focusInput}) => {

    const user = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className='flex flex-col justify-between h-screen overflow-y-auto border-r border-gray-200'>
            <div className="flex flex-col items-start justify-start">
                <div className='text-3xl rounded-full hover:bg-gray-200 cursor-pointer p-3 transition duration-600 ease-in-out'><RiTwitterXFill /></div>
                <nav>
                    <ul>
                        <NavLink to="/"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><GoHomeFill /></span><p className='text-lg'>Anasayfa</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><BiSearch /></span><p className='text-lg'>Keşfet</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><HiOutlineBellAlert /></span><p className='text-lg'>Bildirimler</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><TbMail /></span><p className='text-lg'>Mesajlar</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><CgLoadbarDoc /></span><p className='text-lg'>Listeler</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><RiTwitterXFill /></span><p className='text-lg'>Premium</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><FaRegUser /></span><p className='text-lg'>Profil</p></li></NavLink>
                        <NavLink to="*"><li className='mt-1 py-4 px-4 flex items-center gap-3 font-semibold hover:bg-gray-200 rounded-full p-3'><span className='text-2xl'><CgMoreO /></span><p className='text-lg'>Daha fazla</p></li></NavLink>
                        <li onClick={focusInput} className='cursor-alias font-semibold py-4 px-4 mt-4 flex items-center gap-3 text-white rounded-full p-3 bg-blue-500'><span className='text-2xl'><RiQuillPenLine /></span>Tweetle</li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-12 items-center p-3 pl-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                <NavLink className="flex items-center gap-4">
                    <img src={user?.photoURL} width="50px" height="50px" className='rounded-full' alt="" /> 
                    <h2>{user?.displayName}</h2>  
                </NavLink>
                <span className='text-3xl' onClick={handleLogout}><GiExitDoor /></span>
            </div>
        </div>
    )
}

export default Menu