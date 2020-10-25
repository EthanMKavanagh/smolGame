-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- TEAM TABLE
CREATE TABLE "team" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "coach" VARCHAR(256) NOT NULL,
    "image_url" VARCHAR(2000) NOT NULL,
    "bio" VARCHAR(2000) NOT NULL
);

-- USER TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "authLevel" VARCHAR(256) DEFAULT 'USER',
    "team_id" INT REFERENCES "team"
);

-- GAMES TABLE
CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "score" VARCHAR(256) NOT NULL,
    "touchdowns" INT NOT NULL,
    "field_goals" INT NOT NULL,
    "interceptions" INT NOT NULL,
    "rushing_yards" INT NOT NULL,
    "passing_yards" INT NOT NULL,
    "receiving_yards" INT NOT NULL,
    "isWin" BOOLEAN,
    "team_id" INT REFERENCES "team"
);

-- PLAYERS TABLE
CREATE TABLE "players" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "age" INT NOT NULL,
    "number" INT NOT NULL,
    "position" VARCHAR(256) NOT NULL,
    "height" VARCHAR(256) NOT NULL,
    "weight" INT NOT NULL,
    "team_id" INT REFERENCES "team"
);
  
-- Drop Table Commands if necessary
-- DROP TABLE "user";
-- DROP TABLE "team";
-- DROP TABLE "game";
-- DROP TABLE "players";