import React from 'react';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ListNameButtons = (props) => {
  var arrays = props.arrays;

  const Row = ({ index, style }) => {
    var row = []

    if(props.listSelected && index===0){
      row = (
        <ListItem key={arrays[index]} style={style}>
          <ArrowBackIcon onClick={(e) => props.onListNameButtonChange(e)} />
          <Button value={index} name={arrays[index]} fullWidth={true}
            onClick={(e) => props.onListNameButtonChange(e)}>
            {arrays[index]}
          </Button>
        </ListItem>
      )
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
    <FixedSizeList height={600} width={320} itemSize={50} itemCount={arrays.length}>
      {Row}
    </FixedSizeList>
  );
}

/*
<ListItem key={SelectedList}>
  <ArrowBackIcon onClick={() => setIsSelect(!isSelect)} />
  <Button
    value={SelectedList[1]}
    onClick={() => setIsSelect(!isSelect)}
    fullWidth={true}
  >
    {SelectedList[0]}
  </Button>
</ListItem>
*/

export default ListNameButtons;