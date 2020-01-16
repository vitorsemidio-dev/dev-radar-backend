require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER}@devradar-zhpu3.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require('./routes')

const app = express();

app.use(express.json());

app.use(routes);


app.listen(3333);