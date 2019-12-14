const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'tmp');
  },
  filename: function(req, file, cb) {
    console.log('file :', file);
    const ext = file.originalname.split('.').slice(-1)[0];
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
});

const upload = multer({ storage: storage });

// TODO;
// ? - Get image from local, get images by query from local and other services (pixabay)
// ? - create image (save Image)
// ? - delete image by name in local

const {
  getImages,
  saveImage,
  deleteImage,
  getImageByName
} = require('../controllers/images');

router
  .get('/', getImages)
  .post('/', upload.single('image'), saveImage)
  .delete('/:imageName', deleteImage)
  .get('/:image', getImageByName);

module.exports = router;
