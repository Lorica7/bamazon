var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();

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
                    var newStock = {
                        "results": results[0].stock_quantity,
                        "quantity": answer.quantity,
                        "answer": answer.IDnumber
                    };
                    return newStock; // make newStock an object that can be returned from this function
                    // because to update database need ID and new quantity
                });
            });
    });
}

function updateProduct() {
    var id = newStock.answer;
    var item_quantity = newStock.results - newStock.quantity;
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                item_quantity: item_quantity
            },
            {
                id: id
            }
        ],
        function (error) {
            if (error) throw err;

        });
}
    /*still need to add code that subtracts from DB and updates the total.
    
     connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              start();
            }
          );
        }  */



