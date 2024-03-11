const express = require("express");
const bodyParser = require("body-parser");
const noteRoutes = require('./routes/noteRoutes')
const app = express();
app.use(bodyParser.json())
app.use('/',noteRoutes)
module.exports = app;