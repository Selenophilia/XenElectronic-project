import express from "express";
import data from './seed'

// run node -r esm back-end/server.js to start server
// for nodemon nodemon -r esm server.js

const app = express();

const  PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server Ready!');
  });

app.get('/api/products', (req, res) => {
   res.send(data.products)
});

app.get('/api/product/:id', (req, res) => {
  const product =  data.products.find((prod ) =>  prod.id ===  parseInt(req.params.id))
  product ? res.send(product) : res.status(404).send({message: 'product not found'})
});

app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});

