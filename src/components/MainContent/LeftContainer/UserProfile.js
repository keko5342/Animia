import React from 'react';
import useUserProfile from '../../../functions/useUserProfile';
import { UserProfileContainer, UserInfo, UserPicture } from './Styles.js';

const UserProfile = () => {
  const userProfile = useUserProfile();

  return (
    <UserProfileContainer>
      <UserInfo>
        {userProfile.userName}<br />
        @{userProfile.userScreenName}<br />
      </UserInfo>
      <UserPicture>
        <img src={userProfile.userPicture} alt={userProfile.userName}/>
      </UserPicture>
    </UserProfileContainer>
  )
}

export default UserProfile;