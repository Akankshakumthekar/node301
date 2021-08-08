const {getMaxListeners} = require("../restaurantServices/app/model");
const dbConfig = require('../restaurantServices/app/model/index.js');

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']
const port = process.env.PORT || 3000;
const host = "localhost";
const doc = {
    info: {
        version: "1.0.0",
        title: "Restaurant services",
        description : "Restaurant Services API documentation "
    },
    
    host: host + ":" + port,

    // host: dbConfig.url,


     basePath: "/",
     schemes: ['http', 'https'],
     consumes: ['application/json'],
     produces: ['application/json'],
     tags: [
         {
             "name": "Restaurant"
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