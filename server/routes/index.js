var Router = require('koa-router');
var router = new Router();

const reviewController = require('../controllers/review');

router.get('/reviews/random', reviewController.random);

module.exports = router;
