const sql = require("./db.js");
const bcrypt = require('bcryptjs');
const Customer = function(Customer){
  this.name = Customer.name;
	this.gender = Customer.gender;
	this.city = Customer.city;
	this.phone = Customer.phone;
	this.email = Customer.email;
	this.address = Customer.address;
	this.password = Customer.password;
}
Customer.createCustomer =  ( name, gender, city, phone, email, address, password, result) => {
    const promise =  new Promise( (res, rej) =>{
      const hashpassword = bcrypt.hash(password, 8)
      if(password != ""){
        res(hashpassword);
        return;
      } else{
        rej(hashpassword);
        return;
      }
    })
    promise.then( (results) =>{
      results;
      sql.query("INSERT IGNORE INTO customers SET ?", [{  name: name, gender: gender, city: city, phone: phone, email: email, address: address, password: results}], (err, res) => {
        if (err) {
          console.log("err1",err)
          result(err, null);
          return;
        }
        // if (res.insertId != 0) {
          console.log(
            "id", res.insertId,
              "name: ",name,
              "gender:", gender,
              "city:", city,
              "phone:", phone,
              "email:", email,
              "address:", address,
              "password", results
          )
          result(null,
            {
              id: res.insertId,
              name: name,
              gender: gender,
              city: city,
              phone: phone,
              email: email,
              address: address
            });
          return;
        // }
        // console.log("err2", err);
        // result({ kind: "duplicate_record",  }, null);
      });
    }).catch((error)=>{
      result(error, null);
      return;   
    })
};

Customer.updateCustomer = (name, gender, city, phone, email, address, id, result) => {
  sql.query("UPDATE customers SET name = ?, gender = ?, city= ?, phone = ?, email = ?, address = ? where id = ? ", [name, gender, city, phone, email, address, id], (err, res) =>{
    if(err) {
      console.log("error", err)
      result(err, null);
      return;
    }
    if(res.affectedRows == 0) {
      result({ kind : "not_found"}, null);
      return;
    }
    result(null, {id:id, name, gender, city, phone, email, address});
  });
};

Customer.findCustomer = (customerId, result) =>{
  sql.query("select * from customers where id = ? ", [customerId], (err, res)=> {
    if(err){
      result(err, null);
      return;
    } 
  if(res.length) {
    result(null, res);
    return;
  }
  result({
    kind : "not_found" 
  }, null)
  })
}

Customer. removeCustomer = (customerId, result) =>{
  sql.query("DELETE from customers where id = ?", [customerId], (err, res) => {
    if(err){
      result(null,err);
      return;
    }
    if(res.affectedRows == 0) {
      result({ kind : "not_found"}, null);
      return;
    }
    result(null, res);
  })
}

Customer.findEmailandPassword = (email, password, result)=>{
  sql.query("SELECT password from customers where email = ?", [email], (err, resp)=>{
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
        sql.query("SELECT * from customers where email = ? AND password = ?", [email, pass], (err, res) =>{
         if(err){
           result(err, null)
           return;
         } 
         result(null, {kind: true})
         return;
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
module.exports = Customer;