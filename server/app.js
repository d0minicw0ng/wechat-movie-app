const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const router = require('./routes');
app.use(router.routes());

app.listen(3000);
