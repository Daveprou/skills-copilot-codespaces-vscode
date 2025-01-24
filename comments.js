// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
const comments = [
  { username: 'Alice', comment: 'I love apples!' },
  { username: 'Bob', comment: 'Where is the apple tree?' },
  { username: 'Charlie', comment: 'I like to eat apples.' }
];

// Create a GET route that sends the comments array
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});