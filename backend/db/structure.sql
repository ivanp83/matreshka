CREATE TABLE pages(
	id INT generated always as identity PRIMARY KEY
);
CREATE TABLE about(
	id INT generated always as identity PRIMARY KEY,
	name varchar(100),
	data text,
	page_id INT NOT NULL,
	CONSTRAINT fk_author FOREIGN KEY(page_id) REFERENCES pages(id) ON DELETE CASCADE
);





CREATE TABLE categories (
	id INT generated always as identity PRIMARY KEY,
	name varchar(100) UNIQUE,
	description text,
	image varchar (255) NOT NULL,
    priority_id INT;
	created_at timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE products (
	id INT generated always as identity PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description text NOT NULL,
    price INT NOT NULL,
	category_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);
CREATE TABLE images (
	id INT generated always as identity PRIMARY KEY,
	product_id INT,
	page_id INT,
	small varchar(255) NOT NULL,
	big varchar(255) NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
	FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);


CREATE TABLE customers (
	id BIGINT generated always as identity PRIMARY KEY,
	telegram_id BIGINT  UNIQUE,
	username varchar(255) UNIQUE,
	first_name varchar(255) NOT NULL,
	last_name varchar(255),
	token varchar(255) NOT NULL,
	phone varchar(20) UNIQUE,
	created_at timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE carts (
	id BIGINT generated always as identity PRIMARY KEY,
	customer_id BIGINT,
	FOREIGN KEY (customer_id) REFERENCES customers(telegram_id) ON DELETE CASCADE,
	cart_items jsonb,
	created_at timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE orders (
	id INT generated always as identity PRIMARY KEY,
 	shipping_address  jsonb,
 	order_items  jsonb,
 	yookassa_id  text,
	amount BIGINT,
	currency varchar(10),
	customer_id INT,
	order_status varchar(20),
	FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
	created_at timestamp NOT NULL DEFAULT NOW()
);