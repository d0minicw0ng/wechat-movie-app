const { Client } = require('pg');

module.exports = {
  random: async (ctx, next) => {
    const pg = new Client();
    await pg.connect();
    const res = await pg.query('SELECT * FROM movies ORDER BY RANDOM()');
    const review = res.rows[0];
    await pg.end();

    ctx.body = review;
  }
}