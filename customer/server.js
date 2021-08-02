const dbConfig = require('../customer/app/config/db.config.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")({ origin: true});
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../customer/swagger_output.json');
const http = require('http');
const logger = require('../customer/utils/logger.js');
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
    res.json({message : "hello word"});
});

require("../customer/app/routes/customer.routes.js")(app);
require("../customer/app/routes/token.routes.js")(app);

app.listen(dbConfig.SERVER_PORT,()=>{
    console.log("project is running")
    logger.info(`server started and running`)
});

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

