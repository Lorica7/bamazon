DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_ID INTEGER(11) AUTO_INCREMENT NOT NULL, 
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price REAL(8) NOT NULL,
  stock_quantity INTEGER(7) NULL,
  PRIMARY KEY (item_ID)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Computers and Electronics", 2100.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Karhu sneakers", "Ladies Sneakers", 130.99, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Protein Bars Pack", "Pantry Goods", 24.99, 241);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiritual Gangster Lotus T-shirt", "Ladies Athletics, Yoga", 45.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nutribullet", "Kitchen Appliances", 110.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Juicer", "Kitchen Appliances", 375.69, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Name of the Rose", "Books", 28.99, 2347);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cards Against Humanity", "Games", 30.00, 579);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Horse hooves(10 pack)", "Pet products, Dogs", 27.88, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Training Treats", "Pet products, Dogs", 2100.99, 509);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Javascript for Dummies", "Books", 24.99, 4760);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tao Te Ching", "Books", 27.99,725);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Computers and Electronics", 1000, 9000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monitor", "Computers and Electronics", 875, 85);

