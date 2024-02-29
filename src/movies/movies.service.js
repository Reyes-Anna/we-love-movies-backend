//require the connections folder where knex is defined
const knex = require("../db/connection")

// GET/movies
function list() {
    return knex("movies").select("*")
}

//GET/movies?is_showing=true
function listShowingMovies() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .where({"mt.is_showing": true})
    .distinct("m.movie_id")
    .select("m.*")
}

// GET/movies/:movieId
async function read(movie_id) {
    return knex("movies")
    .select("*")
    .where({movie_id})
    .first()
}




module.exports = {
    list,
    listShowingMovies,
    read,
}