import React, { useState, useCallback } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';

import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if(!email || !password){
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert("Kayıt başarılı")
    }).catch(e => {
      console.log(e);
    })
  }, [email, password])

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='flex justify-center items-center h-screen gap-40'>
        <div className='text-[380px]'>
          <RiTwitterXFill />
        </div>
        <div className='w-[500px] flex items-start flex-col'>
          <h5 className='text-[30px] font-extrabold '>Hemen kayıt ol.</h5>
          <form onSubmit={handleSubmit} className="bg-white mt-12">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">E-posta Giriniz</label>
              <input type="email" id="email" name="email" placeholder="E-posta adresinizi girin" className="mt-1 w-72 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Şifre Giriniz</label>
              <input type="password" id="password" name="password" placeholder="Şifrenizi girin" className="mt-1 w-72 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600">Şifrenizi Tekrar Girin</label>
              <input type="password" id="password" name="confirmPassword" placeholder="Şifrenizi tekrar girin" className="mt-1 w-72 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" />
            </div> */}
            <button type="submit" className="w-full mt-4 p-2 bg-black text-white rounded-full hover:bg-gray-600 mb-12">KAYIT OL</button>
          </form>
          <NavLink to="/login">
            <h2 className='font-semibold flex items-center animate-bounce'><AiOutlineArrowLeft /> Zaten hesabın var mı? Giriş yap.</h2>
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

export default Register