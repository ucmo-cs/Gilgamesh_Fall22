INSERT INTO location (location_id, city, state, street_address, zip_code)
    values (2, 'Kansas City', 'Missouri', '123 Main St.', 12345);
INSERT INTO location (location_id, city, state, street_address, zip_code)
    values (2, 'Kansas City', 'Missouri', '456 North St.', 98765);
INSERT INTO employee(email, first_name, last_name, location_id)
    values ('john.smith@email.com', 'John', 'Smith', 2);