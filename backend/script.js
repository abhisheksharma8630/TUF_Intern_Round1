const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Data to insert
const data = [
  { question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { question: "What is MySQL?", answer: "MySQL is an open-source relational database management system." },
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is the purpose of a primary key in a database?", answer: "A primary key uniquely identifies each record in a table." },
  { question: "What is an API?", answer: "An API (Application Programming Interface) allows communication between different software applications." }
];

// Insert data into the database
data.forEach(item => {  
  const query = 'INSERT INTO Question (question, answer) VALUES (?, ?)';
  connection.query(query, [item.question, item.answer], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return;
    }
    console.log('Data inserted with ID:', results.insertId);
  });
});

// Close the connection
connection.end(err => {
  if (err) {
    console.error('Error closing the connection:', err.stack);
    return;
  }
  console.log('Connection closed.');
});
