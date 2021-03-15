-- Creating Database
CREATE DATABASE crudnodejsmysql;

--using database

use crudnodejsmysql;

--create table

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);


-- mostrar tablas

SHOW TABLES;

-- describir la tabla

DESCRIBE customers;