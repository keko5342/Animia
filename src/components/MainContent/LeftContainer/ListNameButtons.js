import React from 'react';
import useListName from '../../../functions/useListName';
import { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { API_URL } from '../../../config';
import awsconfig from '../../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

const ListNameButtons = () => {
  const userListName = useListName();
  const [isSelect, setIsSelect] = useState(false);
  const [SelectedList, setSelectedList] = useState();
  const [Users, setUsers] = useState([]);

  // リストが選択されると、APIサーバにリスト内ユーザをリクエストする
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

  async function authInfo(){
    var user = await Auth.currentAuthenticatedUser();
    var jwt = user.signInUserSession.idToken.jwtToken;
    return jwt;
  }

  // リスト内のボタンの作成
  function renderRow() {
    var array = [];

    // リストが選択されているかどうか false=リスト名の一覧, true=リストユーザの一覧
    if(!isSelect){
      for(var i=0;i<userListName.length;i++){
        array.push(
          <ListItem key={userListName[i][0]}>
            <Button
              value={i}
              name={userListName[i][0]}
              onClick={(e) => onPress(e)}
              fullWidth={true}
            >
              {userListName[i][0]}
            </Button>
          </ListItem>
        );
      }
    }else{
      array.push(
        <ListItem key={SelectedList}>
          <Button
            value={SelectedList[1]}
            onClick={() => setIsSelect(!isSelect)}
            fullWidth={true}
          >
            {SelectedList[0]}
          </Button>
        </ListItem>
      )
      for(i=0;i<Users.length;i++){
        array.push(
          <ListItem key={`${Users[i][0]}(@${Users[i][1]})`}>
            <Button
              value={SelectedList[1]}
              onClick={() => setIsSelect(!isSelect)}
              fullWidth={true}
            >
              {Users[i][0]}(@{Users[i][1]})
            </Button>
          </ListItem>
        )
      }
    }
  
    return array;
  }

  // リストのボタンが押されたときのアクション
  function onPress(e){
    setIsSelect(!isSelect)
    setSelectedList(userListName[e.currentTarget.value]);
  }

  // 要レスポンシブ対応
  return (
    <div>
      <FixedSizeList height={600} width={320} itemSize={46} itemCount={1}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default ListNameButtons;