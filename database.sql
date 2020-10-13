-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- TEAM TABLE
CREATE TABLE "team" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "coach" VARCHAR(256) NOT NULL,
    "image_url" VARCHAR(2000) NOT NULL
);

INSERT INTO "team" ("name", "coach", "image_url")
VALUES
    ('Wildcats', 'Dug Johnson', 'https://lh3.googleusercontent.com/proxy/aN8UuIgnuDk6wdhIUuik1xsnnKRWTsUqAk7l-caMSZPqPkm_wu5YSjyAcTomBOFMIJxHphYxLopD4D1hPrhOq8WwAhelX9bpDzdoCTuHLUvkzj143CrECW00MtFm9q1Xg3I7z_nge82cPabM');

-- USER TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "authLevel" VARCHAR(256) DEFAULT 'USER',
    "team_id" INT REFERENCES "team"
);

-- Just to see if it populates correctly. User will need to create profiles by registering through the app due to hashing/salting
INSERT INTO "user" ("username", "password", "team_id")
VALUES
    ('ethankavanagh', 'ethankavanagh', 1),
    ('nickkavanagh', 'nickkavanagh', 1);

-- GAMES TABLE
CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "touchdowns" INT NOT NULL,
    "field_goals" INT NOT NULL,
    "interceptions" INT NOT NULL,
    "rushing_yards" INT NOT NULL,
    "passing_yards" INT NOT NULL,
    "recieving_yards" INT NOT NULL,
    "isWin" BOOLEAN,
    "team_id" INT REFERENCES "team"
);

INSERT INTO "game" ("name", "touchdowns", "field_goals", "interceptions", "rushing_yards", "passing_yards", "recieving_yards", "isWin", "team_id")
VALUES
    ('Game 1 @Home', 3, 2, 1, 120, 94, 29, TRUE, 1),
    ('Game 2 @Lakeville', 1, 4, 0, 48, 119, 57, FALSE, 1);

-- PLAYERS TABLE
CREATE TABLE "players" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(256) NOT NULL,
    "age" INT NOT NULL,
    "number" INT NOT NULL,
    "position" VARCHAR(256) NOT NULL,
    "height" INT NOT NULL,
    "weight" INT NOT NULL,
    "team_id" INT REFERENCES "team"
);

INSERT INTO "players" ("name", "age", "number", "position", "height", "weight", "team_id")
VALUES
    ('Nick Kavanagh', 13, 47, 'Strong Saftey', 4.11, 97, 1),
    ('Connor Johnson', 14, 12, 'Quarter Back', 5.4, 128, 1);
    
-- DROP TABLE "user";
-- DROP TABLE "team";
-- DROP TABLE "game";
-- DROP TABLE "players";