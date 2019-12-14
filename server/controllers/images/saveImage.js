/* eslint-disable node/prefer-promises/fs */
const path = require('path');
const formatImage = require('../../utils/formatImage');
const fs = require('fs');

module.exports = async (req, res) => {
  const file = req.file;
  const { filename } = file;

  try {
    const formatedImage = await formatImage(filename);
    fs.unlink(
      path.resolve(__dirname, '../../..', formatedImage[0].sourcePath),
      err => {
        if (err) console.log('err :', err);
      }
    );

    res.sendFile(path.resolve(formatedImage[0].destinationPath));
  } catch (error) {
    console.log('error :', error);
  }
};
