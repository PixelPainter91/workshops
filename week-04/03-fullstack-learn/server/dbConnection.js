//TODO: I want to set up a pool to send request from the server to the database

//import a package called pg --> postgress managment package

import pg from "pg";

//configure .env file
import dotenv from "dotenv";
dotenv.config();

//set up a conncetion pool
export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL, // how to "import" an environment variable
});
