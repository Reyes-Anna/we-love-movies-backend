const knex = require("../db/connection")

//GET /reviews
function list() {
    return knex("reviews").select("*")
}

function read(review_id) {
    return knex("reviews").select("*").where({review_id}).first()
}
//PUT reviews/reviewId
//gives 404 if ID is incorrect
//response included review record and critic info set to the critic property
function update(updatedReview) {
    return knex("reviews as r")
    .join("movies as m", "m.movie_id", "r.movie_id")
    .join("critic as c", "r.critic_id", "c.critic_id")
    .distinct("m.movie_id")
    .select("c.*","r.*")
    .where({ review_id: updatedReview.review_id})
    .update(updatedReview, "c.*", "r.*")

}

//DELETE reviews/:reviewId
//responds with `204 No Content`
//404 error code if ID does not match
function destroy(review_id) {
    return knex("reviews").where({ review_id }).del()
}

module.exports = {
    list,
    read,
    update,
    delete: destroy,
}