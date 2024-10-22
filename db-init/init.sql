CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
-- Insert example rows
INSERT INTO items (name) VALUES ('George');
INSERT INTO items (name) VALUES ('Droid');
INSERT INTO items (name) VALUES ('Reactor');