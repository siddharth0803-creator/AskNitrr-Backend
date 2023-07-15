const express = require('express')
const bodyParser= require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB= require('./dbconfig')
const router= require('./routes')


const app= express()
dotenv.config()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB()

//routes
app.use('/api',router)

const PORT=process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
