import React from 'react';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader, ListNameButtonContainer } from './Styles';

const UsersList = () => {
  return (
    <UsersListContainer>
      <UsersListHeader>Your List</UsersListHeader>
      <ListNameButtonContainer>
        <ListNameButtons />
      </ListNameButtonContainer>
    </UsersListContainer>
  )
}

export default UsersList;