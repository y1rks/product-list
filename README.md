# 起動コマンド
- npx nodemon index.js

# DB User設定
- create user 'dbuser' identified by '0000';
- grant all on *.* to dbuser;
- alter user dbuser identified with mysql_native_password by '0000';

# DB table設定
- create database product_db;
- create table product_db.products (id int not null primary key auto_increment, name varchar(255) not null, price int not null, description varchar(255) not null);

# Node設定
- npm init -y
- npm install express mysql
- npm install nodemon -D