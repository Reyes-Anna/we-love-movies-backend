//require the connections folder where knex is defined
const knex = require("../db/connection")

// GET/movies
function list() {
    return knex("movies").select("*")
}

//GET/movies?is_showing=true
function listShowingMovies() {
    return knex("movies_theaters")
    .select("*")
    .where({is_showing})
    .first()
}

// GET/movies/:movieId
async function read(movie_Id) {
    return knex("movies")
    .select("*")
    .where({movie_Id})
    .first()
}




module.exports = {
    list,
    listShowingMovies,
    read,
}