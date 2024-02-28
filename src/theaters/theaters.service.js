const knex = require("../db/connection")
//GET /theaters
//returns all theaters and the movies playing at each theater
function list() {
    return knex("theaters").select("*")
}

function addMovieList (theaterId) {
    return knex("movies_theaters as mt")
            .join("movies as m", "m.movie_id", "mt.movie_id")
            .where({theater_id: theaterId})
            .select("m.*", "mt.is_showing", "mt.theater_id")
}
module.exports = {
    list,
    addMovieList,
}