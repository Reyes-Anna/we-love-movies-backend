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
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("*")
    .where({is_showing: true})
    .first()
}

// GET/movies/:movieId
async function read(movie_Id) {
    return knex("movies")
    .select("*")
    .where({"movie_id": movie_Id})
    .first()
}




module.exports = {
    list,
    listShowingMovies,
    read,
}