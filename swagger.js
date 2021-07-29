const {getMaxListeners} = require("./app/services/db.js");
const dbConfig = require('../node301/app/config/db.config.js');

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']
const doc = {
    info: {
        version: "1.0.0",
        title: "customer services",
        description : "customer services API documentation "
    },

     host: dbConfig.SERVER_HOST + ":" + dbConfig.SERVER_PORT,

     basePath: "/",
     schemes: ['http', 'https'],
     consumes: ['application/json'],
     produces: ['application/json'],
     tags: [
         {
             "name": "Customer"
         }
     ],

     securityDefinitions: {
        bearerAuth: {
             type: "apiKey",
             name: "Authorization",
             bearerFormat:"JWT",
             in: "header"
         }
     },
     security: [{
         bearerAuth: []
     }]

};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() =>{
    require('./server.js')
})