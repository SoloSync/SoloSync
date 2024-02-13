-- Creating Role ENUM
-- CREATE TYPE Role AS ENUM ('frontend', 'backend', 'fullstack');

-- Creating about_you table
CREATE TABLE about_you (
    id SERIAL PRIMARY KEY,
    fav_lang VARCHAR(255),
    looking_for VARCHAR(255),
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
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    about_id INT REFERENCES about_you(id),
    seen INT REFERENCES seen(id),
    picture_id INT REFERENCES picture(id)
);