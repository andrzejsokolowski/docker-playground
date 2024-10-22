import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DATABASE_USER || 'myuser',
  host: process.env.DATABASE_HOST || 'localhost',
  database: process.env.DATABASE_NAME || 'mydatabase',
  password: process.env.DATABASE_PASSWORD || 'mypassword',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
});

export default pool;
