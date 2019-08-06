DROP DATABASE IF EXISTS pumpSquad2;
CREATE DATABASE pumpSquad2;

\connect pumpsquad2



CREATE TABLE techspecs (
  productid int PRIMARY KEY,
  technicalFeatures text[] NOT NULL,
  designAndFit text NOT NULL,
  zippersAndFly text NOT NULL,
  pocketConfig text NOT NULL,
  construction text[] NOT NULL,
  collarConfig text[] NOT NULL,
  hemConfig text NOT NULL,
  fabricTreatment text NOT NULL,
  materials text[] NOT NULL,
  care text[] NOT NULL
);



CREATE TABLE imgcarousel (
  imgid int PRIMARY KEY,
  productid int REFERENCES techspecs(productid),
  imageurl varchar(30) NOT NULL,
  username text NOT NULL,
  imgcaption text NOT NULL
); 

CREATE TABLE qanda (
  id int PRIMARY KEY,
  productid int REFERENCES techspecs(productid),
  questionHeader text NOT NULL,
  questionContent text NOT NULL,
  questionDate date NOT NULL,
  thumbsUp smallint NOT NULL,      
  thumbsDown smallint NOT NULL,
  username text NOT NULL,
  userLocation text NOT NULL,
  userAge smallint NOT NULL,
  userActivity text NOT NULL,
  answer text
);



