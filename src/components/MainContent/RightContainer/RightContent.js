import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { RightContainer } from './Styles';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Button, CircularProgress } from '@material-ui/core';
import { API_URL } from '../../../config';
import awsconfig from '../../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
});

async function authInfo(){
  var user = await Auth.currentAuthenticatedUser();
  var jwt = user.signInUserSession.idToken.jwtToken;
  return jwt;
}

const RightContent = forwardRef((props, ref) => {
  const classes = useStyles();
  const [Url, setUrl] = useState()

  useImperativeHandle(ref, () => ({
    test() {
      if(props.User){
        console.log(props.User)
        authInfo().then((value) => {
          if(value){
            fetch(`${API_URL}/auth/search?id_token=${value}&q=from:${props.User[1]}`)
              .then(res => res.json().then(data => {
                console.log("res", data);
                setUrl(data);
              }))
          }
        });
      }
    }
  }));

  const test = () => {
    var images = [];
  
    for(var i=0; i<Url.length; i++){
      images.push(
        <Card className={classes.root} key={Url[i]}>
          {
            Url
            ? <CardMedia className={classes.media} image={Url[i]}></CardMedia>
            : <Button>tests</Button>
          }
        </Card>
      )
    }
  
    return images;
  }
//    {
//      Url
//      ? <CardMedia className={classes.media} image={Url[0]}></CardMedia>
//      : <Button>tests</Button>
//    }

  return (
    <RightContainer>
      {
        Url
        ? test()
        : <CircularProgress></CircularProgress>
      }
    </RightContainer>
  )
});

export default RightContent;