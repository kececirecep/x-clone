import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // firebase.js dosyanızın yolunu doğru şekilde belirttiğinizden emin olun

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Kullanıcı giriş yapmışsa
        setUser(authUser);
      } else {
        // Kullanıcı çıkış yapmışsa
        setUser(null);
      }
    });

    // useEffect temizleme fonksiyonu
    return () => {
      unsubscribe();
    };
  }, []);

  return user;
};

export default useAuth;
