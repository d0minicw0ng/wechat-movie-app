var Router = require('koa-router');
var router = new Router();

const reviewController = require('../controllers/review');
const movieController = require('../controllers/movie.js');

router.get('/reviews/random', reviewController.random);
router.get('/movies/popular', movieController.popular);
router.get('/movies/:id', movieController.findOne);

module.exports = router;
