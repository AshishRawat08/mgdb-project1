const express = require('express');
const dotenv =  require("dotenv");


const DbConnection = require("./databaseConnection.js");


dotenv.config();     // every time changes took place in env file server need to restart again even having nodemon

const app = express();

DbConnection();

const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});