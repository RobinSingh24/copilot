// Create web server
const express = require('express');
const app = express();
// Create comments variable
let comments = [];
// Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Listen to port 4001
app.listen(4001, () => {
  console.log('Comments Service listening on port 4001');
});