const knex = require("../db/connection")
//GET /theaters
//hint use reduceProperties
//returns all theaters and the movies
//playing at each theater
function list() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("*")
   
}
module.exports = {
    list,
}