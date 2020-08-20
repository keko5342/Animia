import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export default function useLoginStatus(){
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(window.location.hash){
      const qs = window.location.hash.replace('#', '?');
      //var hashString = window.location.hash.substr(1);
      //console.log('hash', hashString);
      //window.history.replaceState('', document.title, window.location.pathname);
      fetch(`${API_URL}/callback${qs}`, {credentials: "include"})
        .then(res => {
          //console.log(res);
          setIsLogin(true);
        })
    }
  }, []);

  return isLogin;
}