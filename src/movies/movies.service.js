//require the connections folder where knex is defined
const knex = require("../db/connection")

// GET/movies
function list() {
    return knex("movies").select("*")
}

//GET/movies?is_showing=true

// GET/movies/:movieId
// GET/movies/:movieId (incorrect ID)
// GET/movies/:movieId/theaters
// GET/movies/:movieId/reviews



module.exports = {
    list,
}