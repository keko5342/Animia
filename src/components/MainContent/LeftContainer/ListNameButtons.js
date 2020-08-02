import React from 'react';
import useListName from '../../../functions/useListName';
import styled from 'styled-components';

const ListNameButtons = () => {
  const userListName = useListName();
  var listButtons = [];

  for(var i=0;i<userListName.length;i++){
      listButtons.push(<ListNameButton key={userListName[i]}>{userListName[i]}</ListNameButton>);
  }

  return listButtons;
}

const ListNameButton = styled.div`
  display: flex;
  border-bottom: solid;
  border-width: 1px;
  height: 4vh;
  align-items: center;
`;

export default ListNameButtons;