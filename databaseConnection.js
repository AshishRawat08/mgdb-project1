const mongoose = require("mongoose");

function DbConnection() {           // this file only for connection remain same very application/project
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}   
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));

db.once("open", function(){
    console.log("Database Connected")
});

module.exports = DbConnection;

