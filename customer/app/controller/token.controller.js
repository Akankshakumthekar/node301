const Token = require("../services/token.services.js");
const logger = require('../../utils/logger.js');

exports.verifyToken = (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split('');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.sendStatus(403);
    }
}

exports.createToken= (req, res)=>{
    if(!req.body){
        res.status(400).send({
            message : "content can not be empty"
        })
    }
    Token.createToken(req.body.email, req.body.password, (err, data)=>{
      if(err){
        logger.info(err);
        if(err.kind === "not_found") {
          res.status(404).send({
            data:{
              success: false,
              message: `customer data not found with email and password`
            }
          })
        }  else if( err.kind === " Role is not accessable"){
            res.status(404). send({
              data:{
                success: false,
                messgae: ` Role is not accessable`
              }
            })
        } else if( err.kind === "incorrect_password"){
          res.status(404). send({
            data:{
              success: false,
              messgae: ` password is incorrect`
            }
          })
        } else {
          res.status(500).send({
            data:{
              success: false,
              messgae: `something is incorrect`
            }
          })
        }
     
      } else{
        res.send({
          data:{
            success: true,
            data: data
          }
        })
      }
    }) 
  }