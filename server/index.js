const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
// import router
const Auth = require('./router/auth');


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500;

//use cors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000', // Replace with your frontend URL
}));


app.use('/', Auth);


//Add Port and connect to server
app.listen(PORT, () => console.log("Server connected"));