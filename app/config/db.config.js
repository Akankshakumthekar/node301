const dotenv = require('dotenv');
const path = require('path')
dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
})
module.exports = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT:process.env.DB_PORT || 3306,
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "Welcome123$",
    DB_NAME: process.env.DB_NAME || "capstoneproject",
    SERVER_HOST: process.env.SERVER_HOST || "localhost",
    SERVER_PORT: process.env.SERVER_PORT || "3000",
    SECRET_KEY: process.env.SECRET_KEY || "secretkey"
};