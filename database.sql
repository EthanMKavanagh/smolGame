-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


-- USER TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "authLevel" VARCHAR(256) DEFAULT "USER" NOT NULL
);

INSERT INTO TABLE "user"
VALUES
    ('ethankavanagh', 'ethankavanagh'),
    ('nickkavanagh', 'nickkavanagh');

-- TEAM TABLE
CREATE TABLE "team" (
    "id" PRIMARY SERIAL KEY,
    "name" VARCHAR(256) NOT NULL,
    "coach" VARCHAR(256) NOT NULL,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "team"
VALUES
    ('Wildcats', 'Dug Johnson', 1);

-- GAMES TABLE
CREATE TABLE "game" (
    "id" PRIMARY SERIAL KEY,
    "touchdowns" INT,
    "field_goals" INT,
    "interceptions" INT,
    "rushing_yards" INT,
    "passing_yards" INT,
    "recieving_yards" INT,
    "isWin" BOOLEAN DEFUALT FALSE,
    "team_id" INT REFERENCES "team"
);

INSERT INTO "game"
VALUES
    (3, 2, 1, 120, 94, 29, TRUE, 1),
    (1, 4, 0, 48, 119, 57, FALSE, 1);

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

INSERT INTO "players"
VALUES
    ('Nick Kavanagh', 13, 47, 'Strong Saftey', 4.11, 97, 1),
    ('Connor Johnson', 14, 12, 'Quarter Back', 5.4, 128, 1);