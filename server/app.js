const Koa = require('koa');
const app = new Koa();

const body = require('koa-body');
app.use(body({
  multipart: true,
  formidable: {
      keepExtensions: true,
  }
}));

const router = require('./routes');
app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port);
