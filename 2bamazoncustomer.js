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
            .then(function (answer) {


                var query = "SELECT * FROM products WHERE ?";
                connection.query(query, { id: answer.IDnumber }, function (err, results) {
                    if (err) throw err;
                    console.log(results);
            console.log(results[0].stock_quantity);
           console.log(results[0].price);
           console.log(answer.quantity);
                    if (results[0].stock_quantity <= answer.quantity) {
                        console.log("I am sorry, we do not have enough items in stock to fulfill your order. Please check again next week.");
                        connection.end();
                    } else {
                        var total = answer.quantity * results[0].price;
                        console.log(total);
                        console.log("We have " + results[0].stock_quantity + " in stock. We can fill your order. Your total is $" + total + " Please check your email for an invoice.");
                    }
                    
                });
            });
        });
    }
    //still need to add code that subtracts from DB and updates the total.