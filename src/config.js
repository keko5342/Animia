require('dotenv').config();

// テスト用サーバと本番用サーバを環境変数で切り替え
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://animia.animia.net'
  : 'https://animia.animia.net'