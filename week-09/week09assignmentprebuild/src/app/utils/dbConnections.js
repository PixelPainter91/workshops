import dotenv from "dotenv";
import pg from "pg";

// Load environment variables from .env.local
dotenv.config();

// Create a PostgreSQL pool
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
