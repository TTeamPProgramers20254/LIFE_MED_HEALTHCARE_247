CREATE DATABASE medical_website;

USE medical_website;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(8) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    medicine_name VARCHAR(255),
    quantity INT,
    total_price DECIMAL(10, 2),
    delivery_date DATE,
    payment_method ENUM('cash', 'upi'),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
