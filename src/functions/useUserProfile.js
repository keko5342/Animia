import { useState, useEffect } from "react";
import { API_URL } from '../config';
import awsconfig from '../aws-exports-custom';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({userScreenName: "取得待ち", userName: "取得待ち", userPicture: "取得待ち"});

  //フェッチ処理
  useEffect(() => {
    authInfo().then((value) => {
      if(value){
        fetch(`${API_URL}/auth/profile?id_token=${value}`)
          .then(res => res.json().then(data => {
            setUserProfile({userScreenName: data.screen_name, userName: data.name, userPicture: data.picture});
          }))
      }
    });
  }, []);

  return userProfile;
}
export default useUserProfile;