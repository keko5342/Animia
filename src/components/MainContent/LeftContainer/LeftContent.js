/*

左側のコンテンツを管理。コンボボックスとリストで使用する共通の値であるリスト名/ユーザ名を保持。

*/

import React from 'react';
import UserProfile from './UserProfile.js';
//import UsersList from './UsersList.js'
import { LeftContainer } from './Styles';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader } from './Styles';
import useListName from '../../../functions/useListName';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function sortArray(array){
  array.sort(function(a, b) {
    var nameA = a.toUpperCase(); // 大文字と小文字を無視する
    var nameB = b.toUpperCase(); // 大文字と小文字を無視する
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

const LeftContent = () => {
  const userListName = useListName();
  var outputArray = sortArray(userListName.map(function(value, index) { return value[0]; }));

  return (
    <LeftContainer>
      <UserProfile />
      <Autocomplete
        options={outputArray}
        style={{ margin: 5 }}
        renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
      />
      <UsersListContainer>
        <UsersListHeader>Your List</UsersListHeader>
        <ListNameButtons arrays={outputArray} />
      </UsersListContainer>
    </LeftContainer>
  )
}



  /*
  
  // コンボボックスで表示する配列を取得
  getSearchArrays(){
    await this.setState({
      searchArray: this.refs.ListArray.getArray()
    });
   this.refs.MyCom.getCount()
   //return this.state.searchArray;
   return ['t', 'e', 's', 't']
 }

  // 検索窓で選択があったときのコールバック
  searchBarCallback(e, value, reason){
    if(!isSelect && value && reason==="reset"){
      var listNames = [];
      for(var j=0;j<userListName.length;j++){
        listNames.push(userListName[j][0]);
      }
      if(listNames){
        setIsSelect(!isSelect)
        setSelectedList(userListName[listNames.indexOf(value)]);
      }
    }
  }
  */

        /*
        <Autocomplete
          id="grouped-demo"
          options={searchArrays()}
          clearOnEscape={true}
          groupBy={(option) => option[0].toUpperCase()}
          filterSelectedOptions={true}
          renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
          onInputChange={(e, value, reason) => searchBarCallback(e, value, reason)}
        />
        */

export default LeftContent;