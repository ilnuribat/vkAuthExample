DROP TABLE IF EXISTS wallposts;
CREATE TABLE wallposts (
    id SERIAL PRIMARY KEY,
    wallId INT NOT NULL,
    postId INT NOT NULL,
    status TEXT,
    repostsCount INT NOT NULL,
    UNIQUE (wallId, postId)
);
DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    method TEXT NOT NULL,
    params TEXT NOT NULL,
    offset_ INT NOT NULL,
    result JSON,
    UNIQUE (method, params)
);
