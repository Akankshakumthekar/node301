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

Customer.updateCustomer = (name, gender, city, phone, email, address, password, id, result) => {
  sql.query("UPDATE cutomers SET name = ?, gender = ?, city= ?, phone = ?, email = ?, address = ?, password = ?, where id = ?", [name, gender, city, phone, email, address, password, id], (err, res) =>{
    if(err) {
      result(err, null);
      return;
    }
    if(res.affectedRows == 0) {
      result({ kind : "not_found"}, null);
      return;
    }
    result(null, {id:id, name, gender, city, phone, email, address, password});
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
module.exports = Customer;