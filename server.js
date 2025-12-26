const app = require("./src/app.js");
const connectDb = require('./src/config/db.js');
require('dotenv').config();

connectDb();

app.listen(process.env.PORT, ()=>{
    console.log(`Serevr is running on ${process.env.PORT}`)
});