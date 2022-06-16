const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const path = require("path");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeforms",
});

const app = express();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

// http://localhost:3000/
app.get("/", function (request, response) {
  // Render login template
  response.sendFile(path.join(`${__dirname}/form.html`));
});

app.post("/auth", function (request, response) {
  // Capture the input fields
  let username = request.body.username;
  let email = request.body.email;
  // Ensure the input fields exists and are not empty

  if (username && email) {
    // Execute SQL query that'll select the account from the database based on the specified username and email
    connection.query(
      "SELECT * FROM form_entries WHERE username=? and email = ?",
      [username, email],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Email already exists
          response.send("Email already exists!");
        } else {
          request.session.loggedin = true;
          var sql = `INSERT INTO form_entries (username, email) VALUES ("${username}", "${email}")`;
          connection.query(sql);
          //Submit the form
          response.redirect("/home");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Email!");
    response.end();
  }
});
// http://localhost:3000/home
app.get("/home", function (request, response) {
  // If the user is loggedin
  if (request.session.loggedin) {
    response.send("Form Submitted Successfully!");
  }
  response.end();
});

app.listen(3000);
