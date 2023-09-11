const moongese = require('mongoose');
require('dotenv').config();

moongese.connect(process.env.MONGO_URL,{
    dbName: process.env.DB_NAME
}).then(
    ()=>{
        console.log('Connected to MongoDB');
    }
).catch((err)=>{
    console.log("Error connectiong to database"+ err);
})