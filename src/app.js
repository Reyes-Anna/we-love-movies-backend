if (process.env.USER) require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express();
const morgan = require('morgan')
const routeDoesNotExist = require("./errors/routeDoesNotExist")

const moviesRouter = require("./movies/movies.router")

app.use(cors())
app.use(express.json())

app.use("/movies", moviesRouter)

app.use(routeDoesNotExist)

module.exports = app;
