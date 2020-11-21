DROP DATABASE IF EXISTS soundcloutsongplayer;
CREATE DATABASE soundcloutsongplayer;

USE soundcloutsongplayer;

CREATE TABLE songs (
  id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
  song_name varchar(50) NOT NULL,
  artist_name varchar(50) NOT NULL,
  genre varchar(20) NOT NULL,
  song_length varchar(10) NOT NULL,
  song_url varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  created_at varchar(255) NOT NULL
);