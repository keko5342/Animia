require('dotenv').config();

// テスト用サーバと本番用サーバを環境変数で切り替え
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'http://18.180.4.93:18080'
  : 'http://animia.animia.net:18080'