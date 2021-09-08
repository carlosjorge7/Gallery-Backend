const express = require('express');

const photosCtrl = require('../controllers/photos.controller');
const router = express.Router();

router.post('/', photosCtrl.createPhoto)
router.get('/', photosCtrl.getPhotos);
router.get('/:id', photosCtrl.getPhoto)
router.put('/:id', photosCtrl.updatePhoto)
router.delete('/:id', photosCtrl.deletePhoto)

module.exports = router;