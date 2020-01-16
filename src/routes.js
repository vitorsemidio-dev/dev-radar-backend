const { Router } = require('express');
const axios = require('axios');

const Dev = require('./models/Dev');

const routes = Router();

routes.get('/', (req, res) => {

  return res.json({ ok: true });
});

routes.post('/devs', async (req, res) => {
  const { github_username, techs } = req.body;

  const response = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name = login, avatar_url, bio = '' } = response.data;
  const techsArray = techs.split(',').map(tech => tech.trim());

  console.log({ name, avatar_url, bio, techsArray });

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
  });

  return res.json(dev);
})


module.exports = routes;