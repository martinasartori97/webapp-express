const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/moviecontroller')



router.get('/', MoviesController.index)
router.get('/:id', MoviesController.show)
router.post('/:id/reviews', MoviesController.createReview);







module.exports = router;