const express = require('express');
const http= require("http")
const cron = require("node-cron");
const dotenv = require("dotenv")

const dataConfig = require("./config/data")

const app = express();
const server = http.createServer(app);

dotenv.config({path:'.env'})

cron.schedule("*/20 * * * * *", function() { dehd
    console.log("running a task every 10 second"); 
}); 
  

const port = process.env.PORT || 6000

server.listen(port, () => console.log(`Example app is listening on port ${port}`));