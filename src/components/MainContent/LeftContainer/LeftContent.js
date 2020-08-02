import React from 'react';
import UserProfile from './UserProfile.js';
import UsersList from './UsersList.js'
import { LeftContainer } from './Styles';

const LeftContent = () => {
  return (
    <LeftContainer>
      <UserProfile />
      <UsersList />
    </LeftContainer>
  )
}

export default LeftContent;