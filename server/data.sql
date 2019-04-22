CREATE TABLE movies (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(255) UNIQUE NOT NULL,
  profile_image bytea,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  movie_id INTEGER references movies(id),
  user_id INTEGER references users(id),
  content TEXT,
  audio bytea,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

