const express = require('express');
const http= require("http")
const cron = require("node-cron");
const dotenv = require("dotenv")

const dataConfig = require("./config/data")
const {sendData} = require("./helpers/helperFunctions")

const app = express();
const server = http.createServer(app);

dotenv.config({path:'.env'})

cron.schedule("*/5 * * * *", function() {
    const currentDate = new Date();
     console.log(currentDate);
    sendData()
    console.log("running a task every 10 second"); 
}); 
  

const port = process.env.PORT 

server.listen(port, () => console.log(`Weather Data generator is listening on port ${port}`));