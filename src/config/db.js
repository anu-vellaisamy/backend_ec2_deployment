const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = (req, res)=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDb connected successfully")
  }).catch((err)=>{
        console.log("Connection issue "+err)
        process.exit(1);
  })
}

module.exports = connectDb;
