import React from 'react';
import Auth0LoginButton from './auth0/Auth0LoginButton';
import Auth0LogoutButton from './auth0/Auth0LogoutButton';
import Auth0UserFetch from './auth0/Auth0UserFetch';

const CustomSignIn = () => {
  return (
    <div>
      SignIn
      <div>
        <Auth0LoginButton />
        <Auth0LogoutButton />
        <Auth0UserFetch />
      </div>
    </div>
  )
}

export default CustomSignIn;