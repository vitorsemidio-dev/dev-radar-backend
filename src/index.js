require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_HOST}`, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const routes = require('./routes')

const app = express();

app.use(express.json());

app.use(routes);


app.listen(3333);