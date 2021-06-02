# 起動コマンド

- npx nodemon index.js

# リクエスト

- 登録 /register { name: "product", price: "9999", description: "foobar" }
- 検索 /search?q=iphone
- 編集 /edit { id: 99, name: "product", price: "9999", description: "foobar" }
- 削除 /delete?id=99
- 確認 /

# DB User 設定

- create user 'dbuser' identified by '0000';
- grant all on _._ to dbuser;
- alter user dbuser identified with mysql_native_password by '0000';

# DB table 設定

- create database product_db;
- create table product_db.products (id int not null primary key auto_increment, name varchar(255) not null, price int not null, description varchar(255) not null);

# Node 設定

- npm init -y
- npm install express mysql
- npm install nodemon -D
