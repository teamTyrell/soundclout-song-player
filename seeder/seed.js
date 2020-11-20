const faker = require('faker');
const mysql = require('mysql');
const db = require('../server/db/index.js');

let storedSongs = [
  'https://rb.gy/0zsiwi',
  'https://rb.gy/istx6w',
  'https://rb.gy/jtpww9',
  'https://rb.gy/boxort'
];

let storedArt = [
  'https://rb.gy/wlfg4e',
  'https://rb.gy/4iccjv',
  'https://rb.gy/oifoeh',
  'https://rb.gy/19q4ys',
  'https://rb.gy/xfngon',
  'https://rb.gy/upii1i',
  'https://rb.gy/gjn6ni',
  'https://rb.gy/moukam',
  'https://rb.gy/2nebyq',
  'https://rb.gy/g2fl1u',
  'https://rb.gy/qtqlh7',
  'https://rb.gy/ulsefq',
  'https://rb.gy/quvjn7',
  'https://rb.gy/tvt6jr',
  'https://rb.gy/umfogk',
  'https://rb.gy/iu4buf',
  'https://rb.gy/tobfms',
  'https://rb.gy/xxsmeb',
  'https://rb.gy/bmk7e4',
  'https://rb.gy/dqggjt'
];

let fakerData = [];

// function that grabs random index in an array
let randomIndex = arr => Math.floor(Math.random() * arr.length);

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
    song_url: storedSongs[randomIndex(storedSongs)],
    image_url: storedArt[randomIndex(storedArt)],
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