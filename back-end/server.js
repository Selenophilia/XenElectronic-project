import express from "express";
import mongoose from 'mongoose'
import productRoutes from "./routes/productRouter";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv"

// run node -r esm back-end/server.js to start server
// for nodemon nodemon -r esm server.js
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true  }))

mongoose.connect('mongodb://localhost/xenelectronic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const  PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server Ready!');
  });

app.use('/api', userRoutes)
app.use('/api', productRoutes)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message})
})
app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});


