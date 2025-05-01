const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


mongoose.connect("mongodb+srv://albanykt993:albanykt993@cluster0.sirbea9.mongodb.net/IUT?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log("Failed to connect to MongoDb", err);
});

app.listen(4000, ()=>{
        console.log("Server is running on port 4000");
     });

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => 
//    app.listen(5000, () => 
//    console.log("Server running on port 5000")))
//   .catch(err => console.log(err));





  
// app.get('/', (req, res) => {
//   res.send('Hello World I am cheick Ibrahim from Nigeria');
// });

// app.get("/api/users", async (req, res) =>{
//     const users= await User.find();
//     User.find().then((users) =>{
//         res.status(200).send(users);
//     }).catch((err) =>{
//         res.status(500).send({
//          message: err.message || "Some error occured while retrieving users."
//         });
//     });
// });

// app.post("/api/user", async (req, res)=>{
//     const user = new User(req.body);
//     await user.save();
//     User.create(req.body).then((user)=>{
//     res.status(201).send(user);
//     }).catch ((err) =>{
//     res.status(500).send({
//         message: err.message || "Some error occured while creating the user."
//     });
//   });
// });

// app.listen(4000, ()=>{
//     console.log("Server is running on port 4000");
// });

// mongoose.connect("mongodb+srv://albanykt993:albanykt993@cluster0.sirbea9.mongodb.net/IUT?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
//     console.log("Connected to MongoDB");
// }).catch((err) =>{
//     console.log("Failed to connect to MongoDb", err);
// });


// Ib@08165959764