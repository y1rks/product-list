# DB設定
- create user 'dbuser' identified by '0000';
- grant all on *.* to dbuser;
- create database product_db;
- alter user dbuser identified with mysql_native_password by '0000';
- create table products on product_db;

# Node設定
- npm init -y
- npm install express mysql
- npm install nodemon -D

# 起動コマンド
- npx nodemon index.js