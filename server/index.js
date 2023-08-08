const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const Product = require('./router/products');

const app = express();
//use express.jon() to get data into json format
app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use('/', Product);

//use cors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000', // Replace with your frontend URL
}));



//Add Port and connect to server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});