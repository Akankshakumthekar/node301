const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
    res.json({message : "hello word"});
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/token.routes.js")(app);

app.listen(3000,()=>{
    console.log("project is running")
});

