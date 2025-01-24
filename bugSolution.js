const express = require('express');
const app = express();
app.use(express.json()); // Middleware must be placed BEFORE the route handler
app.post('/user', (req, res) => {
  console.log(req.body); 
  res.send('User registered');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});