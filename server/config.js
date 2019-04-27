module.exports = {
  pgConfig: {
    host: process.env.DATABASE_HOST || 'localhost',
    database: process.env.DATABASE_NAME || 'wechat_movies',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 5432
  }
};
