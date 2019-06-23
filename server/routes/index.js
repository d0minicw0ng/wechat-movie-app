var Router = require('koa-router');
var router = new Router();

const reviewController = require('../controllers/review');
const movieController = require('../controllers/movie.js');
const userController = require('../controllers/user.js');
const favoriteController = require('../controllers/favorite.js');

router.get('/reviews/random', reviewController.random);
router.get('/reviews/my_favorites', reviewController.myFavorites);
router.get('/reviews', reviewController.list);
router.get('/reviews/:id', reviewController.findOne);
router.post('/reviews', reviewController.create);
router.post('/audio_reviews', reviewController.createAudio);

router.get('/movies/popular', movieController.popular);
router.get('/movies/:id', movieController.findOne);

router.get('/users/:id', userController.findOne);

router.post('/favorites', favoriteController.create);

module.exports = router;
