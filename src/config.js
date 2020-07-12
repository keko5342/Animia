require('dotenv').config();

// テスト用サーバと本番用サーバを環境変数で切り替え
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'http://18.180.4.93:18080'
  : 'http://18.180.4.93:18080'

export const openid_connect = {
  ClientId: 'xxxxxxxxxxxxxxxx',
  AppWebDomain: 'animia.auth.ap-northeast-1.amazoncognito.com',
  TokenScopesArray: [
    'profile',
    'email',
    'openid',
    'aws.cognito.signin.user.admin',
    'phone'
  ],
  RedirectUriSignIn: 'http://localhost:5000/idpresponse',
  RedirectUriSignOut: 'http://localhost:5000'
}