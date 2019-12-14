const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const path = require('path');

const uploadsDirPath = '../../uploads';

module.exports = async fileName =>
  await imagemin([`tmp/${fileName}`], {
    destination: path.resolve(__dirname, uploadsDirPath),
    plugins: [imageminJpegtran()]
  });
