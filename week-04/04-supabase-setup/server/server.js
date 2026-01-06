import express from "express";


const app= express();
const PORT = 8080;

app.listen(PORT,function(){
    console.info("Server is running in port" + PORT);
});

//TODO: set up a root to Read a welcome message

//root -->"/"

app.get("/", function(request, response){
    response.send("Welcome to the root route. GET comfy!");
});




// CfO2vXMr3VnqTLW2

//=========================Routes=================================
import {db} from "./dbConnection.js";
//TODO: I Want to READ the data in the staff table 

//route --> "/staff"
//http method requried to read data --> GET

app.get("/staff",  async function(request, response){
  //query the database 
  const query = await db.query(`SELECT name, location, age, bio FROM staff;`);
  console.log(query);
  //parse the response into JSON and wrangle it to show just the rows property
  response.json(query.rows);
});
