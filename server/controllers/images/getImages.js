/* eslint-disable node/prefer-promises/fs */
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const pixabayBaseUrl = 'https://pixabay.com/api/';
const pixabayKey = `?key=9659596-64b5fa604eeff0cd5764f690f`;
const pixabayUrl = pixabayBaseUrl + pixabayKey;

const hostUrl = 'http://localhost:5000/images';

module.exports = async (req, res) => {
  const query = req.query;
  let buffer = [];

  if (query.q) {
    const { data } = await axios.get(`${pixabayUrl}&q=${query.q}`);
    buffer = data.hits.map(hit => hit.webformatURL);
  }

  fs.readdir(path.resolve(__dirname, '../../../uploads'), (err, files) => {
    if (err) console.log('err :', err);
    const getImagesLink = files.map(file => hostUrl + '/' + file);

    buffer = [...getImagesLink, ...buffer];
    res.json(buffer);
  });
};
