DROP DATABASE IF EXISTS mattest;
DROP USER IF EXISTS admin;
CREATE USER admin WITH PASSWORD 'postgres';
CREATE DATABASE mattest OWNER admin;

