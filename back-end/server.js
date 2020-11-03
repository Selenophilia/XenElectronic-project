import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Server Ready!');
  });

app.get('/api/products', (req, res) => {
  res.send('Server Ready!');
});

app.listen(5000, function () {
  console.log('Listening on port 5000!');
});

// run node -r esm back-end/server.js to start server