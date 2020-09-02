import { useState, useEffect } from 'react';
import { API_URL } from '../config';
import awsconfig from '../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

export default function useListName() {
  const [listName, setListName] = useState([]);

  useEffect(() => {
    authInfo().then((value) => {
      if(value){
        fetch(`${API_URL}/auth/listName?id_token=${value}`)
          .then(res => res.json().then(data => {
            setListName(data);
          }))
      }
    });
  }, []);

  return listName;
}