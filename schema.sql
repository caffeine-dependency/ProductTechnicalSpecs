DROP DATABASE IF EXISTS pumpSquad2;
CREATE DATABASE pumpSquad2;

\connect pumpsquad2


CREATE TABLE techspecs (
  id int PRIMARY KEY,
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




