CREATE DATABASE web_app_login;

CREATE TABLE users
(
  id serial primary key,
  first_name varchar (50),
  last_name varchar (50),
  email varchar (50),
  created_at TIMESTAMP
);