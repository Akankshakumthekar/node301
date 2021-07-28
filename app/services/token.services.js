const sql = require("./db.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Token = function(Token){
    this.name = Token.name;
	this.email = Token.email;
    this.password = Token.password;
    this.role = Token.role;
}

Token.createToken = (email, password, result)=>{
    sql.query("SELECT password from role where email = ?", [email], (err, resp)=>{
      const promise = new Promise((resolve, reject) =>{
        const dbpassword = JSON.stringify(resp[0,0]);
        const obj = JSON.parse(dbpassword);
        const values = Object.values(obj);
        const pass = values[0]
  
        const isPasswordMatch = bcrypt.compare(password, pass);
        if(dbpassword != undefined){
          resolve(isPasswordMatch)
          return;
        } else{
          reject( result ({kind: "not_found"}, null));
          return;
        }
      })
      promise.then((results) =>{
        results;
        if(results){
          const dbpassword = JSON.stringify(resp[0,0]);
          const obj = JSON.parse(dbpassword);
          const values = Object.values(obj);
          const pass = values[0];
          sql.query("SELECT * from role where email = ? AND password = ?", [email, pass], (err, res) =>{
            const userdata = JSON.stringify(res[0,0]);
            if(userdata === undefined){
                result({ kind : "not_found"}, null)
                return;
            }else{
                const obj = JSON.parse(userdata);
                const values = Object.values(obj);
                const role = values[4];
                if(role === "admin"){
                    jwt.sign({userdata: userdata}, 12345, {expiresIn: '1d'}, (err, token) =>{
                        if(err){
                            result(err, null)
                            return;
                          } 
                          result(null, {token: token})
                          return;  
                    })
                } else {
                    result({kind : "role is not accessable"}, null)
                    return;
                }
            }
        })
        } else{
          result({ kind : "incorrect_password"}, null)
          return
        }
      }) .catch(( error) =>{
        result({ kind: "incorrect password or email"}, null)
        return;
      })
    })
  }

  Token.verifyToken = (req, res, next)=>{
      const bearerHeader = req.headers['authorization'];

      if(typeof bearerHeader !== 'undefined'){
          const bearer = bearerHeader.split('');
          const bearerToken = bearer[1];
          req.token = bearerToken;
          next();
      } else{
          res.sendStatis(403);
      }
  }

  module.exports = Token;