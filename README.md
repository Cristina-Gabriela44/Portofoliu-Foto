Project: Photo Gallery with Rating System
I built this project to learn how to connect a website’s front-end design with a back-end database. It is a photo gallery where users can view images and rate their favorites.

Features:
Lightbox View: Click on any image to view it at full size.

Category Filtering: Easily filter photos by category (Landscapes, Portraits, etc.).

Persistent Rating System: Users can leave a rating from 1 to 5 stars. Ratings are saved in a MySQL database via PHP, so they don’t disappear when the page is refreshed.

Tech Stack:
HTML & CSS: Used for structure and layout (implemented Flexbox for a clean, responsive design).

JavaScript: Handles interactivity and uses the Fetch API to send ratings to the server without reloading the page.

PHP: Acts as the bridge between the front-end and the database.

MySQL: Stores all rating data in a dedicated table.

How to Run Locally:
If you want to test this project on your PC, follow these steps:

Download the files and move them into the htdocs folder within your XAMPP directory.

Open the XAMPP Control Panel and start both Apache and MySQL.

Go to your browser and navigate to localhost/phpmyadmin to create a new database named galerie_foto.

Import or run the SQL code below in the SQL tab to create the necessary table:

CREATE TABLE recenzii (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nume_utilizator VARCHAR(50),
    poza_evaluata VARCHAR(100),
    nota INT,
    data_ora DATETIME DEFAULT CURRENT_TIMESTAMP
);
