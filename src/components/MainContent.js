import React from 'react';
import useUserProfile from '../functions/useUserProfile';
import ListNameButtons from './MainContent/ListNameButtons';
import styled from 'styled-components';

const MainContent = () => {
  const userProfile = useUserProfile();

  return (
    <Container>
      <LeftContainer>
        <UserProfileContainer>
          <UserInfo>
            {userProfile.userName}<br />
            @{userProfile.userScreenName}<br />
          </UserInfo>
          <UserPicture>
            <img src={userProfile.userPicture} alt={userProfile.userName}/>
          </UserPicture>
        </UserProfileContainer>
        <UsersList>
          <UserListHeader>Your List</UserListHeader>
          <ListNameButtonContainer>
            <ListNameButtons />
          </ListNameButtonContainer>
        </UsersList>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: solid;
  border-width: 1px;
  height: 99.8vh;
`;
const UserProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;
const UserInfo = styled.div`
  display: flex;
  flex: 4;
  border-right: solid;
  border-bottom: solid;
  border-width: 1px;
  align-items: center;
`;
const UserPicture = styled.div`
  display: flex;
  flex: 1;
  border-bottom: solid;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;
const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 14;
`;
const UserListHeader = styled.div`
  border-bottom: solid;
  border-width: 1px;
`;
const ListNameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightContainer = styled.div`
  flex: 2;
  border: solid;
  border-left: none;
  border-width: 1px;
  background-color: red;
  height: 99.8vh;
`;

export default MainContent;