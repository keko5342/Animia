import React from 'react';
import useListName from '../../../functions/useListName';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../config';
import { ListNameButton, UserNameButton } from './Styles';
import awsconfig from '../../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

const ListNameButtons = () => {
  const userListName = useListName();
  const [isSelect, setIsSelect] = useState(false);
  const [SelectedList, setSelectedList] = useState();
  const [Users, setUsers] = useState([]);

  var listButtons = [];

  useEffect(() => {
    if(SelectedList){
      authInfo().then((value) => {
        if(value){
          fetch(`${API_URL}/auth/users?id_token=${value}&slug=${SelectedList[1]}&owner_screen_name=${SelectedList[2]}`)
            .then(res => res.json().then(data => {
              setUsers(data);
            }))
        }
      });
    }
  }, [SelectedList])
  
  function onPress(e){
    setIsSelect(!isSelect)
    setSelectedList(userListName[e.currentTarget.value]);
  }

  if(!isSelect){
    for(var i=0;i<userListName.length;i++){
      listButtons.push(
        <ListNameButton
          key={userListName[i][0]}
          value={i}
          name={userListName[i][0]}
          onClick={(e) => onPress(e)}
        >
          {userListName[i][0]}
        </ListNameButton>
      );  
    }
  } else {
    listButtons.push(
      <ListNameButton
        key={SelectedList}
        value={SelectedList[1]}
        onClick={() => setIsSelect(!isSelect)}
      >
        {SelectedList[0]}
      </ListNameButton>
    )
    for(i=0;i<Users.length;i++){
      listButtons.push(
        <UserNameButton
          key={`${Users[i][0]}(@${Users[i][1]})`}
        >
          {Users[i][0]}(@{Users[i][1]})
        </UserNameButton>
      )
    }
  }

  return listButtons;
}

export default ListNameButtons;