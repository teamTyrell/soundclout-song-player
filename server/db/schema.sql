DROP DATABASE IF EXISTS soundcloutsongplayer;
CREATE DATABASE soundcloutsongplayer;

-- CREATE USER 'hrr49-user'@'localhost' IDENTIFIED BY 'Pine@pple49';
-- GRANT ALL PRIVILEGES ON soundcloutsongplayer.* TO 'hrr49-user'@'localhost';

USE soundcloutsongplayer;

CREATE TABLE library (
  id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
  song_name varchar(50) NOT NULL,
  artist_name varchar(50) NOT NULL,
  genre varchar(20) NOT NULL,
  song_length varchar(10) NOT NULL,
  song_url varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  created_at varchar(255) NOT NULL
);