import { useState, useEffect } from "react";
import { API_URL } from '../config';

export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({userScreenName: "取得待ち", userName: "取得待ち", userPicture: "取得待ち"});

  useEffect(() => {
    //フェッチ処理
    if(window.location.hash){
      const qs = window.location.hash.replace('#', '?');
      //console.log(`${API_URL}/auth/profile${qs}`);
      fetch(`${API_URL}/auth/profile${qs}`)
        .then(res => res.json().then(data => {
          //console.log(data);
          setUserProfile({userScreenName: data.screen_name, userName: data.name, userPicture: data.picture});
        }))
    }
  }, []);

  return userProfile;
}
export default useUserProfile;