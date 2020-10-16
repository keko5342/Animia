import styled from 'styled-components';

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 100vw;
  width: 400px;
  height: auto;
`;
//  height: 99.8vh;


export const UserProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
`;
export const UserPicture = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 14;
`;
export const UsersListHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListNameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 60vh;
`;

export const ListNameButton = styled.button`
  display: flex;
  height: 4vh;
  align-items: center;
`;

export const UserNameButton = styled.button`
  display: flex;
  align-items: center;
  height: 3vh;
`;

export const Half = styled.div`
  display: flex;
  flex: 1;
`;