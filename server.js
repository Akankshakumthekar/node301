const dbConfig = require('../node301/app/config/db.config.js');
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

app.listen(dbConfig.SERVER_PORT,()=>{
    console.log("project is running")
});

