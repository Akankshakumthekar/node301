module.exports = app => {
    const token = require("../controller/token.controller.js");
    app.post("/token/create-token", token.createToken);  

  };