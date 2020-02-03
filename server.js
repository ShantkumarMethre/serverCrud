// // const http = require("http");
// const express = require("express");
// var app = express();

// const hostname = "127.0.0.1";
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// // const server = http.createServer((req, res) => {
// //   //Set the response HTTP header with HTTP status and Content type
// //   res.statusCode = 200;
// //   res.setHeader("Content-Type", "text/plain");
// //   res.end("Hello World\n");
// // });

// app.get("./getData", (res, req) => {
//   res.send("hello");
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");

// const connection = mysql.createPool({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "demo"
// });

// // Starting our app.
// const app = express();

// // Creating a GET route that returns data from the 'users' table.
// app.get("/users", function(req, res) {
//   // Connecting to the database.
//   connection.getConnection(function(err, connection) {
//     // Executing the MySQL query (select all data from the 'users' table).
//     connection.query("SELECT * FROM users", function(error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results);
//     });
//   });
// });

// app.get("/users/:id", function(req, res) {
//   // Connecting to the database.
//   console.log("req", req);
//   let id = req.params.id;
//   console.log("id is passsed by client is", id);
//   connection.getConnection(function(err, connection) {
//     // Executing the MySQL query (select all data from the 'users' table).
//     const user = `SELECT * FROM users Where id=${id}`;
//     connection.query(user, function(error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results);
//     });
//   });
// });

// // Starting our server.
// app.listen(3000, () => {
//   console.log("Go to http://localhost:3000/users so you can see the data.");
// });

const http = require("http");

const app = require("./app");
const server = http.createServer(app);
server.listen(3000);
