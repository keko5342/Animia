import React, { Component } from 'react';
import ListNameButtons from './ListNameButtons';
import { UsersListContainer, UsersListHeader } from './Styles';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray: []
    };
  }

  render() {
    return (
      <UsersListContainer>
        <UsersListHeader>Your List</UsersListHeader>
        <ListNameButtons ref='MyComponent' />
      </UsersListContainer>
    )  
  }
}

export default UsersList;