CREATE DATABASE mycompany;
USE mycompany;

CREATE TABLE employee (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	zip INT UNSIGNED NOT NULL,
	street VARCHAR(50) NOT NULL,
	salary DECIMAL (12, 2),
	department CHAR(30) NOT NULL
);

CREATE TABLE intership (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	zip INT UNSIGNED NOT NULL,
	street VARCHAR(50) NOT NULL,
	salary DECIMAL (12, 2)
);

INSERT INTO employee (name, zip, street, salary, department) VALUES
	('Alvaro', 15001, 'Marina', 3000, 'product'),
	('Jose', 15008, 'Vioño', 1800, 'engineering'),
	('Cris', 15008, 'Monelos', 2100, 'engineering');

INSERT INTO intership (name, zip, street, salary) VALUES
	('Luis', 15001, 'Marina', 1050),
	('Ana', 15008, 'Vioño', 1050);
