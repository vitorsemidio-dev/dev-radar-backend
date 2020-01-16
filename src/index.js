const express = require('express');

const routes = require('./routes')

const app = express();

app.use(express.json());

// app.use(routes);

app.get('/', (req, res) => {
  console.log('sucesso');

  return res.json({ ok: true });
});


app.listen(3333);