const express = require("express");
const bodyParser = require('body-parser');
const cors= require("cors") ({ origin: true});
const db = require("./app/model");
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

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", (req, res) =>{
    res.json({message: "welcome!"})
})

require("../orderServices/app/route/order.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("project is running")
    // logger.info(`server started and running`)
});