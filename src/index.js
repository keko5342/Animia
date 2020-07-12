import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Auth0Provider } from "@auth0/auth0-react";
Amplify.configure(awsExports);

ReactDOM.render(
  <Auth0Provider
    domain="animia.us.auth0.com"
    clientId="B7NH7Q3E6HO38a9H2FW2OsKJMfKr06k0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
