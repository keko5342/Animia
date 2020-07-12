import React from 'react';
import { SignIn } from 'aws-amplify-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Auth0LoginButton from './Auth0LoginButton'

class CustomSignIn extends SignIn {
  constructor(props){
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"]
  }

  render(){
    return (
      <div>
        SignIn
        <div>
          <Auth0LoginButton />
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleInputChange}
            />
            <Button
              fullWidth
              onClick={() => super.signIn()}>
              Sign In With COGNITO
            </Button>
          </form>
        </div>
      </div>
    )
  }

  showComponent() {
    const { classes } = this.props;

    // 読み込み中
    if (window.location.search.includes('code')) {
      return (
        <div className={classes.progress}>
          Loading...
        </div>
      )
    }
  }
}

export default CustomSignIn