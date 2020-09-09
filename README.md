# 概要
本ツール『Animia』は自作ソフトウェア『listManager』を発展させたWebアプリです。  
大学生時代にコミックマーケットのサークルチェックのために、Twitterのリスト機能を利用してイラストレータを管理している友人から
「リスト内のユーザが多くなってしまって困っているので整理したい」という要望を受け、リストを整理するソフトウェアの制作に取り組んだのがきっかけで作ったソフトウェアが元になっています。

現在は友人の1人に使ってもらうだけでなく、多くの方々の要望にマッチしたサービスを作るために開発を続けています。  
Twitterを使ってイラストを検索する人，エゴサーチを行う人，新しいクリエイターと出会いたい人の一助となることが目標です。  
  
このツールでは以下のことができます。
  1. Twitterへのログイン
  2. ユーザが保持しているリストの参照
  3. リスト内ユーザが投稿した画像の参照
  4. (実装予定)検索ワードによるユーザの検索
  5. (実装予定)ユーザをリストに追加／削除
  6. (実装予定)お気に入りユーザの設定
  7. (実装予定)人気のユーザのレコメンド

現時点では保持しているリスト内ユーザの画像を見るくらいしかできませんが、今後はもっと機能を拡張していきます。  
※本ツールの使用にはTwitterアカウントが必要です。  

# 技術
フロント：JavaScript(React.js)  
バックエンド：Node.js(Express)  

ホスティング：AWS Amplify(フロントサーバ), AWS LightSail(バックエンドAPIサーバ)  
認証：AWS Cognito, Auth0  
コード管理：git, gitHub, gitSecrets, amplify-cli  

## フロント
フロントエンドでは、JavaScriptのReactフレームワークを使って開発をしています。
構成は以下のようになっています。  
src  
|---App.js(メイン)  
|---components(App.jsが間接的に呼び出すコンポーネント群)  
    |---auth0(認証の際に利用するコンポーネント群)  
    |---MainContent(ログイン後のコンテンツを表示するコンポーネント群)  
        |---LeftContainer(コンテンツの左側メニューを構成するコンポーネント群)  
        |---RightContainer(コンテンツの右側コンテンツを構成するコンポーネント群)  
|---functions(コンポーネントが利用するstate群)  

ポイント！
DOMのスタイル指定にはmaterial-uiを使用しています。
React-Hooksを用いた関数コンポーネントを採用しているため、stateの管理をコンポーネントの中から切り離して管理することのできるモダンなReactコードです。
もしも描画コンテンツが多くなってしまった場合に備え、material-uiのFixedSizeListコンポーネントを採用しました。このコンポーネントはリスト内のすべてのコンテンツをプリロードするのではなく、スクロール時に順次読み出しすることでコンテンツが多くなってもスムーズに表示することができるコンポーネントです。

## バックエンド
バックエンドでは、Node.jsを採用しました。フレームワークとしてExpressを採用しています。
こちらに関しては別リポジトリで管理しておりますので⇒（）のURLを参照してください。

## ホスティング

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
