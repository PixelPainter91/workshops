import express from "express";
import fs from "fs";

const app= express();
const PORT = 8080;

app.use(express.json());

app.get("/", function(request, response) {
  response.json({ message: "Guestbook API Home" });
});

app.listen(PORT,function(){
    console.log("Guestbook API running on port " + PORT);
});

let guestbook = [];       //empty array to store messages ====
try {
  const fileData = fs.readFileSync("guestbook.json");
  guestbook = JSON.parse(fileData);
  console.log("Loaded existing guestbook messages.");
} catch (err) {
  console.log("No existing guestbook.json found. Starting with empty guestbook.");
}

//Create GET route for all messages
app.get("/guestbook", function(request, response){ //creates /guestbook endpoint
    response.json(guestbook); ///sends all stored messages at JSON
    //right no, empty arry ^^ 
});

app.post("/guestbook", function(request, response){
    const name = request.body.name;
    const message = request.body.message;

    if(!name || !message){         // validation
        return response.status(400).json({error: "Name and message are required"})
    }
    const entry = {
        id: Date.now(),
        name: name,
        message: message,
        timestamp: new Date().toISOString()
    };

    guestbook.push(entry); //<--adds it to the GB array
    saveGuestbook(); //<------------------saves to file
    response.json(entry); // <--------returns new entry
});

app.delete("/guestbook/:id", function(request, response){ // :id is a URL parameter
    const id = Number(request.params.id); //ID from url
    const initialLength = guestbook.length;
    

    guestbook = guestbook.filter(function(entry){
        return entry.id !== id;
    });

    if (guestbook.length === initialLength) {
        saveGuestbook();
        response.json({ message: "Message deleted"});
    }
});
function saveGuestbook() {
  fs.writeFileSync("guestbook.json", JSON.stringify(guestbook, null, 2));
}
