const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/model.User");
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});

mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.sirbea9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log("Failed to connect to MongoDb", err);
});


// Ib@08165959764