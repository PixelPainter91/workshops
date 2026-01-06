import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}...`);
});

app.use(express.json());

// create a root endpoint
app.get("/", function (request, response) {
  response.json({message: "You are looking at my root route. How Rude!"});
});

app.post("/new-staff", (req,res)=>{
    const newStaff = req.body.formValues;
})