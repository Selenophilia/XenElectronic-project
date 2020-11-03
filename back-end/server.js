import express from "express";
import data from './seed'
const app = express();

app.get('/', (req, res) => {
    res.send('Server Ready!');
  });

app.get('/api/products', (req, res) => {
   res.send(data.products)
});

app.listen(5000, function () {
  console.log('Listening on port 5000!');
});

// run node -r esm back-end/server.js to start server
// for nodemon nodemon -r esm server.js