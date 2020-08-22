import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export default function useLoginStatus(){
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(window.location.hash){ 
      const qs = window.location.hash.replace('#', '?');
      fetch(`${API_URL}/callback${qs}`, {credentials: "include"})
        .then(res => {
          setIsLogin(true);
        })
    }
  }, []);

  return isLogin;
}