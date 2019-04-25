var Router = require('koa-router');
var router = new Router();

const reviewController = require('../controllers/review');
const movieController = require('../controllers/movie.js');
const userController = require('../controllers/user.js');

router.get('/reviews/random', reviewController.random);
router.get('/reviews/my_favorites', reviewController.myFavorites);
router.post('/reviews', reviewController.create);

router.get('/movies/popular', movieController.popular);
router.get('/movies/:id', movieController.findOne);

router.get('/users/:id', userController.findOne);

module.exports = router;
