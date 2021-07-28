const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
    res.json({message : "helo word"});
});
require("./src/app/routes/customer.routes.js")(app);

app.listen(3000,()=>{
    console.log("project is running")
});

