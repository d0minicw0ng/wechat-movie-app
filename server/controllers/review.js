const config = require('../config');
const { Client } = require('pg');

module.exports = {
  random: async (ctx, next) => {
    const pg = new Client(config.pgConfig);
    await pg.connect();
    const res = await pg.query('SELECT * FROM reviews r JOIN movies m ON r.movie_id = m.id JOIN users u ON r.user_id = u.id ORDER BY RANDOM()');
    const review = res.rows[0];

    await pg.end();

    ctx.body = review;
  }
}