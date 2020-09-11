/*

左側のコンテンツを管理。コンボボックスとリストで使用する共通の値であるリスト名/ユーザ名を保持。

*/

import React from 'react';
import UserProfile from './UserProfile.js';
import { LeftContainer } from './Styles';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader } from './Styles';
import useListName from '../../../functions/useListName';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../config';
import awsconfig from '../../../aws-exports-custom';
import Amplify, { Auth } from "aws-amplify";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

Amplify.configure(awsconfig);

function sortArray(array){
  array.sort(function(a, b) {
    var nameA = a[0].toUpperCase(); // 大文字と小文字を無視する
    var nameB = b[0].toUpperCase(); // 大文字と小文字を無視する
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  return array;
}

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

const LeftContent = (props) => {
  const userListName = useListName();
  const [isSelect, setIsSelect] = useState(false);
  const [SelectedList, setSelectedList] = useState();
  const [Users, setUsers] = useState([]);
  const [UserArray, setUserArray] = useState([]);
  const [ComboBoxUserArray, setComboBoxUserArray] = useState([]);
  var searchArray = userListName.map(function(value, index) { return value[0]; });
  var listArray = sortArray(userListName.map(function(value, index) { return value[0]; }));

  // リストが選択されると、APIサーバにリスト内ユーザをリクエストする
  useEffect(() => {
    if(SelectedList){
      authInfo().then((value) => {
        if(value){
          fetch(`${API_URL}/auth/users?id_token=${value}&slug=${SelectedList[1]}&owner_screen_name=${SelectedList[2]}`)
            .then(res => res.json().then(data => {
              var userArray = sortArray(data.map(function(value, index) { return [`${value[0]}(@${value[1]})`, value[2]]; }))
              userArray.unshift(SelectedList[0]);
              var comboBoxUserArray = sortArray(data.map(function(value, index) { return `${value[0]}(@${value[1]})`; }))
              comboBoxUserArray.unshift(SelectedList[0]);
              setUserArray(userArray);
              setComboBoxUserArray(comboBoxUserArray);
              setUsers(data);
            }))
        }
      });
    }
  }, [SelectedList])

  // コンボボックスのボタンが押されたときのアクション
  function onClickAutoCompleteCallback(e, value, reason){
    if(value && reason==="reset"){
      if(isSelect && value !== SelectedList[0]){
        var array = Users.map(function(value, index) { return value[1]; })
        props.onClickUser(
          Users[array.indexOf(
            value.substring(value.lastIndexOf("(") + 2, value.lastIndexOf(")"))
          )]
        )
      }else{
        setIsSelect(!isSelect)
        setSelectedList(userListName[searchArray.indexOf(value)]);
      }
    }
  }

  // リストのボタンが押されたときのアクション
  function onClickListNameButtonCallback(e){
    setIsSelect(!isSelect)
    setSelectedList(userListName[searchArray.indexOf(listArray[e.currentTarget.value])]);
  }

  function onClickListNameButtonUsersCallback(e){
    var array = Users.map(function(value, index) { return value[1]; })
    props.onClickUser(
      Users[array.indexOf(
        UserArray[e.currentTarget.value][0].substring(
          UserArray[e.currentTarget.value][0].lastIndexOf("(") + 2, 
          UserArray[e.currentTarget.value][0].lastIndexOf(")")
        )
      )]
    )
  }

  return (
    <LeftContainer>
      <UserProfile />
      <Autocomplete
        id="searchBox"
        options={
          isSelect 
          ? ComboBoxUserArray
          : listArray
        }
        clearOnEscape={true}
        style={{ margin: 5 }}
        groupBy={(option) => option[0].toUpperCase()}
        renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
        onInputChange={(e, value, reason) => onClickAutoCompleteCallback(e, value, reason)}
      />
      
      <UsersListContainer>
        <UsersListHeader>Your List</UsersListHeader>
        <ListNameButtons
          arrays={
            isSelect 
            ? UserArray
            : listArray
          }
          onListNameButtonChange={onClickListNameButtonCallback}
          onListNameButtonUsersChange={onClickListNameButtonUsersCallback}
          listSelected={isSelect}
          User={props.User}
        />
      </UsersListContainer>
    </LeftContainer>
  )
}

export default LeftContent;