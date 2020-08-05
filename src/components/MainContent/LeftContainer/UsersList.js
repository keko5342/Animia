import React from 'react';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader, ListNameButtonContainer, Half } from './Styles';

class UsersList extends React.Component {
  render() {
    return (
      <UsersListContainer>
        <UsersListHeader>Your List</UsersListHeader>
        <ListNameButtonContainer>
          <ListNameButtons />
        </ListNameButtonContainer>
      </UsersListContainer>
    )  
  }
 }

export default UsersList;