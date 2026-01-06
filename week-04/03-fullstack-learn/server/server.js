import express from "express";
import {db} from "./dbConnection";
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = 8080;
app.listen(PORT, function(){
    console.info(`Server is running in localhost:${PORT}`);
});

//TODO: set up a root route to READ a welcome message

app.get("/", function(request, response){
    response.json({message:`Welcome to the root route. GET comfy!`});
});



app.post("/messages", (req, res) => {
  console.log("req.body:", req.body);
  res.json({ status: "Message received!" });
});