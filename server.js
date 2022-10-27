const colors = require('colors');
const express = require('express');
const dotenv  = require('dotenv');
const userroute = require('./routes/userRoute')

// env file config
dotenv.config();


// get env file value
const port = process.env.PORT || 5000 ; 


// express init
const app = express();


// data manage 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// get router
app.use('/api/v1/user', userroute )



// express server create 
app.listen( port ,() => {

    console.log(`server Is ranging on port ${port}`.bgGreen.black);
})


