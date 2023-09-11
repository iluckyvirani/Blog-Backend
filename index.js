const express = require('express');
const app = express();

const bodyparser  = require('body-parser');
const cors = require('cors');
const PORT = 8080;
require('dotenv').config();
require('./db')

app.use(bodyparser.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.json({message:"The API is working"});
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})