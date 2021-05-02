const express = require('express');
const helmet = require('helmet');

const mongoose = require('mongoose');

const app = express();
app.use(helmet());

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

mongoose
  .connect(`mongodb://${host}/avengersDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })

  .then(() => console.log('Connected to db successfully ...'))
  .catch((err) => console.log('Error has occured while connecting to db', err));

module.exports = app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
