# Workout Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

In this project, I created an application that logs burgers entered and devoured by the user. The technologies used include Node, Express, Handlebars, MySQL, and ORM. It is depoyed on Heroku using a JAWSDB MySQL database.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Website](#website)
* [Code Repository](#repository)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

1. Clone this repo.
2. Install node.js. It can be downloaded here: [node.js Downloads](https://nodejs.org/en/download/)
3. Initialize npm:
    >npm init -y
4. Install Express npm package:
    >npm install express
5. Install MySQL npm package:
    >npm insall mysql
6. Install Handlebars npm package:
    >npm insall express-handlebars
7. Run the SQL located in /db/schema.sql in MySQL to create the database and then /db/seeds.sql to populate the table.
8. If you are going to run the app locally, update the connection information in the /config/connection.js file to reflect your MySQL credentials.

## Usage

To run this app:

1. Open the console in the directory where the server.js file is located and run the following command:
    >node server
2. Enter the name of a burger in the textarea and click on __Submit__. It will then display on the left-hand side under the _Burgers You Can Eat_ section.
3. Click on the __Devour It!__ button next to a burger. It will be removed from the left-hand side section and will be listed on the right-hand side section titled _Burgers You've Eaten_.

## Screenshots

### Index Page with No Burgers Devoured

![Eat-Da-Burger Home Screen with No Burgers Devoured](./public/assets/img/screenshot1.PNG)

### Index Page with Burgers Devoured

![Eat-Da-Burger Home Screen with Burgers Devoured](./public/assets/img/screenshot2.PNG)

## Website

[Deployed Website](https://burger-johanna.herokuapp.com/)

## Repository

[Code Repository](https://github.com/johannaleal/burger)

## License

This application is covered under license: MIT License.

## Contributing

If you would like to contribute to this repository, please contact me via the email below to discuss the changes you wish to make.

## Tests

To test this application:

1. Run the application in your terminal by typing:
    > node start.js
2. Create a new burger and verify that it is listed under the _Burgers You Can Eat_ section and that a __Devour It!__ button displays next to it.
3. Click on the __Devour It!__ button next to a burger under the _Burgers You Can Eat_ section and verify that it is removed from there and appears under the _Burgers You've Eaten_ section.
4. After adding and devouriung burgers, verify that your changes are reflected in the MySQL burgers database.

## Questions

### Contact Information

GitHub Profile: [@johannaleal](http://github.com/johannaleal)

Email: <johannarleal@gmail.com>
