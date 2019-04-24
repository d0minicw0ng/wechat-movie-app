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
  },

  myFavorites: async (ctx, next) => {
    const pg = new Client(config.pgConfig);
    await pg.connect();
    // NOTE: I am just going to hard code id to 1 as we don't have a login system.
    const res = await pg.query('SELECT r.content, r.audio, m.title, m.image, u.username, u.profile_image FROM user_favorite_reviews ufr JOIN reviews r ON ufr.review_id = r.id JOIN movies m ON r.movie_id = m.id JOIN users u ON r.user_id = u.id WHERE ufr.user_id = $1 ORDER BY ufr.created_at DESC', [1]);
    const reviews = res.rows;

    await pg.end();

    ctx.body = reviews;    
  }
}