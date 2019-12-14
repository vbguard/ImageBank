const path = require('path');

module.exports = (req, res) => {
  const fileName = req.params.image;
  res.sendFile(path.resolve(__dirname, '../../../uploads', fileName));
};
