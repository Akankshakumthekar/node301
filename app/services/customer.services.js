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
      sql.query("INSERT IGNORE INTO customer SET ?", [{  name: name, gender: gender, city: city, phone: phone, email: email, address: address, password: results}], (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
        if (res.insertId != 0) {
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
        }
        result({ kind: "duplicate_record",  }, null);
      });
    }).catch((error)=>{
      result(error, null);
      return;   
    })
};
module.exports = Customer;