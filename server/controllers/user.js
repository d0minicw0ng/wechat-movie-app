const config = require('../config');
const { Client } = require('pg');

module.exports = {
  findOne: async (ctx, next) => {
    const pg = new Client(config.pgConfig);
    await pg.connect();
    const res = await pg.query('SELECT * FROM users WHERE id = $1', [ctx.params.id]);
    const movie = res.rows[0];

    await pg.end();

    ctx.body = movie;
  },
}