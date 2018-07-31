var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
   
    displayProducts();
  });
  
  
  function displayProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
    inquirer
    .prompt([
      {
        name: "choice",
        type: "rawlist",
        choices: function() {
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
        name: "name",
        type: "input",
        message:"Please enter an ID number"
      },
    
    ]);
  });
}
    //.then(function(answer) 