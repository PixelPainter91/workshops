//TODO: set up a pool to send requests from the server to the database

//import pg--> npm i pg (postgress managment package)
import pg from "pg";


import dotenv from "dotenv";
dotenv.config();

export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});
