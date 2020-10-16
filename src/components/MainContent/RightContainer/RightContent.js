import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { RightContainer, NullContainer } from './Styles';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Recommend from './RecommendContainer/Recommend';
import { API_URL } from '../../../config';
import awsconfig from '../../../aws-exports-custom';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

const useStyles = makeStyles({
  gridList: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "100%",
  },
  tileClass: {
    maxHeight: "100%",
    maxWidth: "100%",
  }
});

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

const RightContent = forwardRef((props, ref) => {
  const classes = useStyles();
  const [Url, setUrl] = useState([])

  useImperativeHandle(ref, () => ({
    test() {
      if(props.User){
        //console.log(props.User)
        authInfo().then((value) => {
          if(value){
            fetch(`${API_URL}/auth/search?id_token=${value}&q=from:${props.User[1]}`)
              .then(res => res.json().then(data => {
                //console.log("res", data);
                setUrl(data);
              }))
          }
        });
      }
    }
  }));

  return (
    <RightContainer>
      {
        (() => {
          if(props.IsVisible === false){
            return <Recommend />
          }else{
            if(Url.length > 0){
              return(
                <GridList cellHeight={"25%"} className={classes.gridList}  rows={1} cols={1}>
                  {Url.map((url) => (
                    <GridListTile classes={{root: classes.tileClass}} key={url} cols={1}>
                      <img src={url} alt={url} />
                    </GridListTile>
                  ))}
                </GridList>    
              )
            }else{
              return <NullContainer>
                        まだユーザが選択されていない<br />
                        もしくはユーザが最近画像を投稿していません
                        <br /><br />
                        ユーザを選択してください
                      </NullContainer>
            }        
          }
        })()
      }
    </RightContainer>
  )
});

export default RightContent;