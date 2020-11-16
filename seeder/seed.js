const faker = require('faker');
const mysql = require('mysql');
const db = require('../server/db/index.js');

let fakerData = [];

// generates new faker data and adds new row to fakerData array
for (let i = 0; i <= 100; i++) {
  let itemObj = {
    song_name: faker.random.words(),
    artist_name: faker.internet.userName(),
    genre: faker.address.direction(),
    song_length: faker.random.number({
      "min": 120,
      "max": 300
    }),
    song_url: faker.internet.url(),
    image_url: faker.image.imageUrl(),
    created_at: JSON.stringify(faker.date.past())
  }
  fakerData.push(itemObj);
}

// adds all generated data into the songs table
for (let row of fakerData) {
  // console.log(row);
  let song_name = row.song_name;
  let artist_name = row.artist_name;
  let genre = row.genre;
  let song_length = row.song_length;
  let song_url = row.song_url;
  let image_url = row.image_url;
  let created_at = row.created_at;

  let query = `INSERT INTO songs (song_name, artist_name, genre, song_length, song_url, image_url, created_at) VALUES ('${song_name}', '${artist_name}', '${genre}', '${song_length}', '${song_url}', '${image_url}', '${created_at}')`

  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success! ', res);
    }
  })
}

db.end();