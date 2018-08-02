var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();

//var port = new MyPort(secret.port);
//var user = new MyUser(secret.user);
//var password = new MyPassword(secret.password);
// SEE WEEK 10 HW for more....need to create .env file and file called "secret"//

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;

  displayProducts();
});


function displayProducts() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].id + " | " + results[i].item_name + " | " + results[i].department_name +
                " | " + results[i].price);
            }
            return choiceArray;
          },
          message: "What is the ID of the item you want to purchse?"
        },
        {
          name: "IDnumber",
          type: "input",
          message: "Please enter an ID number"
        },
        {
          name: "quantity",
          type: "input",
          message: "Please enter the amount you wish to purchase."

        },
      ])
   .then(function(answer) {
     return answer;
  });
  
      var quantity = answer.quantity;
      var id = answer.IDnumber;
 if (id == 1){
      connection.query("SELECT * FROM products WHERE id = 1"), function (err, results) {
        if (err) throw err;
        console.log (results);
      };
  } else if (id ==2){
    connection.query("SELECT * FROM products WHERE id = 2"), function (err, results) {
      if (err) throw err;
      console.log (results);
    };
  }
    else if (id == 3){
   connection.query("SELECT * FROM products WHERE id = 3"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 4){
  connection.query("SELECT * FROM products WHERE id = 4"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 5){
  connection.query("SELECT * FROM products WHERE id = 5"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 6){
  connection.query("SELECT * FROM products WHERE id = 6"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 7){
  connection.query("SELECT * FROM products WHERE id = 7"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 8){
  connection.query("SELECT * FROM products WHERE id = 8"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 9){
  connection.query("SELECT * FROM products WHERE id = 9"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 10){
  connection.query("SELECT * FROM products WHERE id = 10"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 11){
  connection.query("SELECT * FROM products WHERE id = 11"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 12){
  connection.query("SELECT * FROM products WHERE id = 12"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 13){
  connection.query("SELECT * FROM products WHERE id = 13"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
} else if (id == 14){
  connection.query("SELECT * FROM products WHERE id = 14"), function (err, results) {
    if (err) throw err;
    console.log (results);
  };
  }

  });
}