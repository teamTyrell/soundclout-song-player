const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const songsRouter = require('./db/routes.js');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', songsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})