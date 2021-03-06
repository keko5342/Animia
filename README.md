# 概要
本ツール『Animia』は自作ソフトウェア『listManager』を発展させたWebアプリです。  
大学生時代にコミックマーケットのサークルチェックのために、Twitterのリスト機能を利用してイラストレータを管理している友人から
「リスト内のユーザが多くなってしまって困っているので整理したい」という要望を受け、リストを整理するソフトウェアの制作に取り組んだことがきっかけで作ったソフトウェアが元になっています。

現在は友人に使ってもらうだけでなく、多くの方々の要望にマッチしたサービスを作るために開発を続けています。  
Twitterを使ってイラストを検索する人，エゴサーチを行う人，新しいクリエイターと出会いたい人の一助となることが目標です。  
  
このツールでは以下のことができます。
  1. Twitterへのログイン
  2. ユーザが保持しているリストの参照
  3. リスト内ユーザが投稿した画像の参照
  4. (実装予定)検索ワードによるユーザの検索
  5. (実装予定)ユーザをリストに追加／削除
  6. (実装予定)お気に入りユーザの設定
  7. (実装予定)人気のユーザのレコメンド

現時点では保持しているリスト内ユーザの画像を見ることくらいしかできませんが、今後はもっと機能を拡張していきます。  
※本ツールの使用にはTwitterアカウントが必要です。  

# 利用方法
Google Chromeを推奨しています。他のブラウザ用には調整していないためレイアウトが崩れる可能性があります。
1. サイトにアクセス（一般には非公開）  
2. Twitterアカウントでログイン（サンプルアカウントを用意しています）
3. 保持しているリスト一覧が表示されるのでクリック
4. リスト内のユーザが表示されるのでクリック
5. ユーザの画像が閲覧できる
6. この先はまだ開発中です

# 技術
フロント：JavaScript(React.js)  
バックエンド：Node.js(Express)  

ホスティング：AWS Amplify(フロントサーバ), AWS LightSail(バックエンドAPIサーバ)  
認証：AWS Cognito, Auth0  
コード管理：git, gitHub, gitSecrets, amplify-cli  

いずれの点でも大きなチャレンジの連続でしたが、Qiitaや公式Documentを使って乗り越えています！

## フロント
フロントエンドでは、JavaScriptのReactフレームワークを使って開発をしています。  
Reactが好きなこと、書きなれていることを考慮して採用しました。

構成は以下のようになっています。  
src  
|---App.js(メイン)  
|---components(App.jsが間接的に呼び出すコンポーネント群)  
|---|---auth0(認証の際に利用するコンポーネント群)  
|---|---MainContent(ログイン後のコンテンツを表示するコンポーネント群)  
|-------|---LeftContainer(コンテンツの左側メニューを構成するコンポーネント群)  
|-------|---RightContainer(コンテンツの右側コンテンツを構成するコンポーネント群)  
|---functions(コンポーネントが利用するstate群)  

ポイント！  
　DOMのスタイル指定にはmaterial-uiを使用しています。  
　React-Hooksを用いた関数コンポーネントを採用しているため、stateの管理をコンポーネントの中から切り離して管理することのできるモダンなReactコードです。  
　もしも描画コンテンツが多くなってしまった場合に備え、material-uiのFixedSizeListコンポーネントを採用しました。このコンポーネントはリスト内のすべてのコンテンツをプリロードするのではなく、スクロール時に順次読み出しすることでコンテンツが多くなってもスムーズに表示することができるコンポーネントです。 

チャレンジ！  
　これまではクラスコンポーネントを使った状態管理やReduxを使った状態管理をしてきたため、新しい機能を受け入れることに苦戦しました。しかし、コード分割が容易になる点、コードがシンプルになる点を鑑みれば、React-Hooksを採用したことは大きな前進です。  
　デザイン面でもstyledcomponent等で自作したコンポーネントを使うのではなく、多くのWebサイトで採用されているmaterial-uiライブラリに触れることで、多くの人に利用されている利便性やその欠点について理解を深めることができました。

## バックエンド
バックエンドでは、Node.jsを採用しました。フレームワークとしてExpressを採用しています。  
こちらに関しては別リポジトリで管理しておりますので⇒（https://github.com/keko5342/Animia_Backend
）のURLを参照してください。  

## ホスティング
フロントエンドサーバにはAWS Amplifyを採用しました。  
そもそもAWSを積極的に利用した経験がなかったため、大きなチャレンジでした。

AWS Amplifyを採用した理由としては以下のようなものがあります。
 1. EC2やLightSailと比較して機能が限定されているがAWS初心者にもやさしいUIやドキュメントが用意されていること
 2. AmazonがWeb開発者向けに提供しているツールであり、今後もWeb開発者向けのアップデートが期待できること
 3. 対話型コンソールを利用することで認証機能やAPI機能を簡単に実装できること
 4. ドメインをRoute 53で取ることに決めたため、Amazon内のサービスの方が都合が良い
 
 過去にTwitterの開発者認証に必要なTokenを公開していたことがあったので、Tokenの管理には特に気を使っています。（gitSecrets, gitignoreを使った管理）

## 認証
フロントエンドでの認証の流れは以下の通りです。  
認証ボタンを押下　⇒　Amazon Cognitoへの認証リクエスト　⇒　Auth0へのフェデレーテットログインリクエスト
　⇒　ブラウザへのログイン画面のコールバック　⇒　ログイン情報の入力　⇒　認証情報の取得

Amazon CognitoではTwitterログインを利用するためにDigitsというサービスを経由する必要があるのですが、現在は閉鎖されているため外部サービスと連携してログインする必要がありました。  
そこでAuth0を利用してフェデレーテットログインを行うことで、Twitterログインを実現しています。

認証情報はJWTの形で取得されるため検証を行う必要があります。JWTの検証はAPIサーバへのリクエストの度に行われるためログインしていないがAPIを利用できるということはありません。  
JWTの有効期限は現在1日を設定していますが、今後調整していく予定です。

手探りで環境構築に取り組んだので、非常に時間のかかった作業でしたがその分良いものができたと自負しています。  
Basic認証をはじめとする簡単な認証とは違い、大きな手間がかかりましたがJWT，OAuth2などの理解に大きくつながったので良い経験になりました。  
自動ログイン機能を付けることが今後の目標です。

## コード管理
コード管理ではgitを使っています。  
使い慣れているのでそこまで目新しいことはありませんが、今回は過去の失敗を踏まえてgitSecretsを導入しています。  
gitSecretsは、認証に使うToken等の機密情報をgitにアップロードすることを防止するツールです。  
機密情報の漏洩に気を配り、良いコードを書き、良いサービスを作っていきます。

## 最後に
以上でAnimiaフロントエンド編は終了になります。
何かご質問がありましたら気軽にご連絡ください。
