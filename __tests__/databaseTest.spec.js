import faker from 'faker';

describe("Seeding Check", () => {

  test("it should generate a random index", () => {
    let randomIndex = arr => Math.floor(Math.random() * arr.length);
    console.log(typeof randomIndex);
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const output = randomIndex(input);
    expect(input[output]).toBeDefined();
  });

  test("it should randomly render song data using faker", () => {
    let randomIndex = arr => Math.floor(Math.random() * arr.length);
    // songs to lookup
    let storedSongs = [
      'https://rb.gy/0zsiwi',
      'https://rb.gy/istx6w',
      'https://rb.gy/jtpww9',
      'https://rb.gy/boxort'
    ]
    // art to lookup
    let storedArt = [
      'https://rb.gy/wlfg4e',
      'https://rb.gy/4iccjv',
      'https://rb.gy/oifoeh',
      'https://rb.gy/19q4ys'
    ]
    // the object we're generating
    let testObj = {
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

    expect(testObj).toBeDefined();
    expect(typeof testObj.song_name).toBe('string');
    expect(typeof testObj.artist_name).toBe('string');
    expect(typeof testObj.genre).toBe('string');
    expect(typeof testObj.song_length).toBe('number');
    expect(typeof testObj.song_url).toBe('string');
    expect(typeof testObj.image_url).toBe('string');
    expect(typeof testObj.created_at).toBe('string');
  });

});