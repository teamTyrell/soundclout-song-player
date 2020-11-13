DROP DATABASE IF EXISTS soundclout;
CREATE DATABASE soundclout;

USE soundclout;

CREATE TABLE songs (
  id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
  song_name varchar(50) NOT NULL,
  artist_name varchar(50) NOT NULL,
  genre varchar(20) NOT NULL,
  song_length varchar(10) NOT NULL,
  song_url varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);