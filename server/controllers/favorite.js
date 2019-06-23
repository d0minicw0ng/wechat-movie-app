const config = require('../config');
const { Client } = require('pg');
const fs = require('fs');

module.exports = {
  create: async (ctx, next) => {
    const pg = new Client(config.pgConfig);
    await pg.connect();
    const body = ctx.request.body;

    const exists = await pg.query('SELECT * FROM user_favorite_reviews WHERE review_id = $1 AND user_id = $2', [body.review_id, 1]);

    if (res.rows.length > 0) {
        await pg.end();
        ctx.body = exists[0];
    else {
        // NOTE: I am just going to hard code id to 1 as we don't have a login system.
        const res = await pg.query('INSERT INTO user_favorite_reviews (review_id, user_id) VALUES ($1, $2) RETURNING id', [body.review_id, 1]);
        const favorite = {
          id: res.rows[0].id,
          review_id: body.review_id,
          user_id: 1,
        };

        await pg.end();
        ctx.body = favorite; 
      }
  }
}
