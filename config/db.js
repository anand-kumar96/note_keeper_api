const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
colors.enable();
// Access the environment variable
const databaseUrl = process.env.DATABASE_URL;
// Connect to MongoDB using the environment variable
const db = mongoose.connect(databaseUrl)
  .then(() => {
    console.log('Connected to MongoDB'.yellow.inverse);
    // You can start your Express app here
  })
  .catch(err => {
    throw err;
  });
  
module.exports = db;