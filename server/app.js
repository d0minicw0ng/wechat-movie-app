const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const router = require('./routes');
app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port);
