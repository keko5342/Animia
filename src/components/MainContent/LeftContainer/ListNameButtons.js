import React from 'react';
import useListName from '../../../functions/useListName';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../config';
import { ListNameButton, UserNameButton } from './Styles';

const ListNameButtons = () => {
  const userListName = useListName();
  const [isSelect, setIsSelect] = useState(false);
  const [SelectedList, setSelectedList] = useState();
  const [Users, setUsers] = useState([]);

  var listButtons = [];

  useEffect(() => {
    if(SelectedList){
      if(window.location.hash){
        const qs = window.location.hash.replace('#', '?') + `&slug=${SelectedList[1]}&owner_screen_name=${SelectedList[2]}`;
        console.log(qs);
        fetch(`${API_URL}/auth/users/${qs}`)
          .then(res => res.json().then(data => {
            setUsers(data);
            console.log(data)
          }))
      }
    }
  }, [SelectedList])
  
  function onPress(e){
    setIsSelect(!isSelect)
    setSelectedList(userListName[e.currentTarget.value]);
    console.log(userListName[e.currentTarget.value])
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

  console.log(listButtons);
  return listButtons;
}

export default ListNameButtons;