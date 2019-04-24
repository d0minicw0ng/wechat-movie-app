const config = require('../config');
const { Client } = require('pg');

module.exports = {
  popular: async (ctx, next) => {
    const pg = new Client(config.pgConfig);
    await pg.connect();
    const res = await pg.query('SELECT * FROM movies ORDER BY RANDOM() LIMIT 5;');
    // We need more data for this to actually work.
    // const res = await pg.query('SELECT * FROM movies WHERE id IN (SELECT movie_id FROM reviews GROUP BY movie_id ORDER BY COUNT(*) DESC LIMIT 5;)');
    const movies = res.rows;

    await pg.end();

    ctx.body = movies;
  }
}