import React from 'react';
import { FixedSizeList } from 'react-window';
import { ListItem, ListItemAvatar, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  alignItemsFlexStart: {
    alignItems: "start",
  },
  fullWidth: {
    justifyContent: "space-between",
    justifyItems: "space-between",
    justifySelf: "space-between",
    textAlign: "left",
  },
});

const ListNameButtons = (props) => {
  const classes = useStyles();
  var arrays = props.arrays;

  const Row = ({ index, style }) => {
    var row = []

    if(props.listSelected){
      if(index===0){
        row = (
          <ListItem key={arrays[index]} style={style} >
            <ArrowBackIcon onClick={(e) => props.onListNameButtonChange(e)} />
            <Button value={index} name={arrays[index]} fullWidth={true}
              onClick={(e) => props.onListNameButtonChange(e)}>
              {arrays[index]}
            </Button>
          </ListItem>
        )
      }else{
        if(props.User){
          var str = String(`${props.User[0]}(@${props.User[1]})`)
          if(str === arrays[index]){
            row = (
              <ListItem key={arrays[index]} style={style} >
                <ListItemAvatar>
                  <Avatar alt={arrays[index][0]} src={arrays[index][1]} />
                </ListItemAvatar>
                <Button value={index} name={arrays[index]} fullWidth={true} classes={{fullWidth: classes.fullWidth}} label="Primary" primary={true}
                  onClick={(e) => props.onListNameButtonUsersChange(e)}>
                  {arrays[index][0]}
                </Button>
              </ListItem>
            )
          }else{
            row = (
              <ListItem key={arrays[index]} style={style} >
                <ListItemAvatar>
                  <Avatar alt={arrays[index][0]} src={arrays[index][1]} />
                </ListItemAvatar>
                <Button value={index} name={arrays[index]} fullWidth={true} classes={{fullWidth: classes.fullWidth}} label="Primary" primary={true}
                  onClick={(e) => props.onListNameButtonUsersChange(e)}>
                  {arrays[index][0]}
                </Button>
              </ListItem>
            )
          }
        }else{
          row = (
            <ListItem key={arrays[index]} style={style}>
              <ListItemAvatar>
                <Avatar alt={arrays[index][0]} src={arrays[index][1]} />
              </ListItemAvatar>
              <Button value={index} name={arrays[index]} fullWidth={true} classes={{fullWidth: classes.fullWidth}} label="Primary" primary={true}
                onClick={(e) => props.onListNameButtonUsersChange(e)}>
                {arrays[index][0]}
              </Button>
            </ListItem>
          )
        }
      }
    }else{
      row = (
        <ListItem key={arrays[index]} style={style}>
          <Button value={index} name={arrays[index]} fullWidth={true}
            onClick={(e) => props.onListNameButtonChange(e)}>
            {arrays[index]}
          </Button>
        </ListItem>
      )
    }

    return row
  }
  
  // 要レスポンシブ対応
  return (
    <FixedSizeList height={600} width={"auto"} itemSize={50} itemCount={arrays.length}>
      {Row}
    </FixedSizeList>
  );
}

export default ListNameButtons;