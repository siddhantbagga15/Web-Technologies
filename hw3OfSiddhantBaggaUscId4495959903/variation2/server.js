// To connect with your mongoDB database
const mongoose = require('mongoose');

// CHANGE the username,password,link to be yours!
mongoose.connect('mongodb+srv://siddhantbagga15:Ucantseeme@cluster0.omsjk.mongodb.net/',{
    dbName: 'organization',
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// schema for our table called 'users'
const DepartmentSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true,
        unique: true
    },
    manager: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Department = mongoose.model('departments', DepartmentSchema); 
//\\User.createIndexes();

// express middleware
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // go to http://localhost:5000 to see this
});

app.post("/register", async (req, resp) => {
    try {
        const department = new Department(req.body);
        // .save() sends data to our cloud DB, more here: https://masteringjs.io/tutorials/mongoose/save
        let result = await department.save(); 
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);  
            console.log(result);
        } else {
            console.log("Department already registered");
        }

    } catch (e) {
        resp.send("Something went wrong");
    }
});
app.listen(5000);