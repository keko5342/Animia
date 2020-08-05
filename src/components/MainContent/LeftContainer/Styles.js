import styled from 'styled-components';

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: solid;
  border-width: 1px;
  height: 99.8vh;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  flex: 4;
  border-right: solid;
  border-bottom: solid;
  border-width: 1px;
  align-items: center;
`;
export const UserPicture = styled.div`
  display: flex;
  flex: 1;
  border-bottom: solid;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 14;
`;
export const UsersListHeader = styled.div`
  border-bottom: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
`;
export const ListNameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 40vh;
`;

export const ListNameButton = styled.button`
  display: flex;
  border-bottom: solid;
  border-width: 1px;
  height: 4vh;
  align-items: center;
`;

export const UserNameButton = styled.button`
  display: flex;
  border-bottom: solid;
  border-width: 1px;
  align-items: center;
`;

export const Half = styled.div`
  display: flex;
  flex: 1;
`;