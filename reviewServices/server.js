const express = require("express");
const cors= require("cors") ;
const db = require("../reviewServices/app/services/db.js");
const mongoose = require("mongoose");

const app = express();

 db.mongoose
.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connected to database")
})
.catch(err => {
    console.log("can not connect to database")
    process.exit();
})
const corsOptions= {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/", (req, res) =>{
    res.json({message: "welcome!"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("project is running")
    // logger.info(`server started and running`)
});