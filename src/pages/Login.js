import React, { useCallback, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom';



import { RiTwitterXFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if(!email || !password){
      return;
    }
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/');
    }).catch(e => {
      console.log(e);
      alert("Bilgileri tekrar kontrol ediniz.")
    })
  }, [email, password])


  const login = () => {
    auth.signInWithPopup(provider).then(()=>{
      navigate('/');
    }).catch((error) => alert(error.message))
  }


  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='flex justify-center items-center h-screen gap-40'>
        <div className='text-[380px]'>
          <RiTwitterXFill />
        </div>
        <div className='w-[500px] flex items-start flex-col'>
          <h2 className='text-[60px] font-extrabold pb-14'>Şu anda olup bitenler</h2>
          <h5 className='text-[30px] font-extrabold pb-8'>Hemen giriş yap.</h5>
          <button onClick={login} className='border border-[#cfd9de] rounded-full p-2 bg-white font-[500] text-gray-500 w-72 px-12 flex gap-2 text-md hover:bg-[#f8faff] hover:border-[#d2e3fc] items-center'><FcGoogle /> Google ile giriş yapın</button>
          <form onSubmit={handleSubmit} className="bg-white mt-12">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Eposta</label>
              <input type="email" id="email" name="email" placeholder="Eposta adresinizi girin" className="mt-1 w-72 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" 
              value={email}
              onChange={(e)=>setEmail(e.currentTarget.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Şifre</label>
              <input type="password" id="password" name="password" placeholder="Şifrenizi girin" className="mt-1 w-72 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" 
              value={password}
              onChange={(e)=>setPassword(e.currentTarget.value)}
              />
            </div>
            <button type="submit" className="w-full mt-4 p-2 bg-black text-white rounded-full hover:bg-gray-600 mb-12">GİRİŞ YAP</button>
          </form>
          <NavLink to="/register">
            <h2 className='font-semibold flex items-center animate-bounce'><AiOutlineArrowLeft /> Hesabın yok mu? Kayıt ol.</h2>
            </NavLink>
        </div>
      </div>
      <ul className='text-gray-900 decoration-current text-sm flex items-center justify-center flex-wrap gap-4 pb-4'>
        <li><a className='hover:underline' href="#">Hakkında</a></li>
        <li><a className='hover:underline' href="#">X uygulamasını indir</a></li>
        <li><a className='hover:underline' href="#">Yardım Merkezi</a></li>
        <li><a className='hover:underline' href="#">Hizmet Şartları</a></li>
        <li><a className='hover:underline' href="#">Gizlilik Politikası</a></li>
        <li><a className='hover:underline' href="#">Çerez Politikası</a></li>
        <li><a className='hover:underline' href="#">Imprint</a></li>
        <li><a className='hover:underline' href="#">Erişilebilirlik</a></li>
        <li><a className='hover:underline' href="#">Reklam bilgisi</a></li>
        <li><a className='hover:underline' href="#">Blog</a></li>
        <li><a className='hover:underline' href="#">Durum</a></li>
        <li><a className='hover:underline' href="#">Kariyer</a></li>
        <li><a className='hover:underline' href="#">Marka Kaynakları</a></li>
        <li><a className='hover:underline' href="#">Reklam</a></li>
        <li><a className='hover:underline' href="#">Pazarlama</a></li>
        <li><a className='hover:underline' href="#">İşletmeler İçin X</a></li>
        <li><a className='hover:underline' href="#">Geliştiriciler</a></li>
        <li><a className='hover:underline' href="#">Dizin</a></li>
        <li><a className='hover:underline' href="#">Ayarlar</a></li>
        <li><a className='hover:underline' href="#">© 2023 X Corp.</a></li>
      </ul>
    </div>
  )
}

export default Login