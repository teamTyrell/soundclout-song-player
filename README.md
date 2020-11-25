# Project Name

> Manages the play/pause of the current song. Also displays the album art, artist and other info for the song

## Related Projects

  - https://github.com/teamTyrell/soundclout-relational_info-service
  - https://github.com/teamTyrell/soundclout-comments
  - https://github.com/teamTyrell/soundclout-song-player-proxy
  - https://github.com/teamTyrell/soundclout-realtional_info-proxy
  - https://github.com/teamTyrell/soundclout-comments-proxy

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Dependencies](#dependencies)

## Usage

1. Install all requirements and dependencies listed at the bottom of the README

2. Run this command in the root directory

  __this will start our MySQL server__
   ```
   mysql.server start
   ```

3. Now that MySQL is running, run this command in the root directory run schema.sql

  __this will create out database from the prebuilt schema file__
  __this will also create a new user with priveleges: hrr49-user__
  __if you haven't set up a username__
   ```
   mysql -u root < server/db/schema.sql
   ```
  __otherwise__
   ```
   mysql -u YOUR_USERNAME -p < server/db/schema.sql
   ```

4. Now that our database has been created, run this command in the root directory

  __this will seed the database we just created__
   ```
   npm run seed
   ```

5. Now that the database has been seeded, run this command in the root directory

  __this will compile our JSX components into a bundle__
  ```
  npm run build
  ```

6. Now that we've built our client side, run this command in the root directory

  __this will start our Express server__
  ```
  npm start
  ```

You're up and running! The service will be available at `http://localhost:3001/`


## Requirements

- Node 10.15.3
- MySQL Ver 14.14 Distrib 5.7.32


## Dependencies

From within the root directory:
```
npm install
```

