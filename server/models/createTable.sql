-- Creating Role ENUM
-- CREATE TYPE Role AS ENUM ('frontend', 'backend', 'fullstack');

-- Creating about_you table
CREATE TABLE about_you (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    favLang VARCHAR(255),
    lookingFor VARCHAR(255),
    role VARCHAR(255)
);

-- Creating seen table
CREATE TABLE seen (
    id SERIAL PRIMARY KEY,
    accepted INT[],
    rejected INT[]
);

-- Creating picture table
CREATE TABLE picture (
    id SERIAL PRIMARY KEY,
    photo BYTEA
);

-- Creating user table
CREATE TABLE user_info (
    userId SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    aboutId INT REFERENCES about_you(id),
    seen INT REFERENCES seen(id),
    pictureId INT REFERENCES picture(id)
);