-- Schema

-- Create food_db
CREATE DATABASE food_db;

-- Switch to/use food_db
USE food_db;

-- Create food_list table with these fields:
CREATE TABLE food_list
(
    -- create id col as primary key, non-null, auto-incrementing, int...
	id INT NOT NULL AUTO_INCREMENT,
	
    -- create food_name col as non-null string...
    food_name VARCHAR (255) NOT NULL,

    -- create food_descript col for longer string description...
    food_descrip VARCHAR (800),

    -- create price col for price of food...
    price DECIMAL(10,2),
    
    -- create a food_type col for type of food designation...
    food_type VARCHAR (75),

    -- create a restaurant col for where to get the food...
    restaurant VARCHAR (255),

    -- create a devoured boolean for whether eaten and set to default as false
	devoured BOOLEAN DEFAULT false,

    -- create a rating integer for post-devouring rating
    rating INT,

    -- create a notes string for post-devouring reflections
    notes VARCHAR (500),

    -- overtly set the primary key
	PRIMARY KEY (id)
);