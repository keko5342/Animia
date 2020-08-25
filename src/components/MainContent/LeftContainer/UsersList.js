import React from 'react';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader } from './Styles';

class UsersList extends React.Component {
  render() {
    return (
      <UsersListContainer>
        <UsersListHeader>Your List</UsersListHeader>
        <ListNameButtons />
      </UsersListContainer>
    )  
  }
}

export default UsersList;