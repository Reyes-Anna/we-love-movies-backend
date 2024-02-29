const knex = require("../db/connection")
const mapProperties = require("../utils/map-properties")

const addCritic = mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
    created_at: "critic.created_at",
    updated_at: "critic.updated_at",
})



//GET /reviews
function list() {
    return knex("reviews").select("*")
}

function read(review_id) {
    return knex("reviews").select("*").where({review_id}).first()
}

function readReviewsForMovie(movie_id) {
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({"r.movie_id": movie_id})
    .then(reviews => reviews.map(review => addCritic(review)))
}

//PUT reviews/reviewId
//gives 404 if ID is incorrect
//response included review record and critic info set to the critic property
function update(updatedReview) {
    knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id})
    .update(updatedReview, "*")

    return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select(
        "r.*",
        "c.critic_id as c_critic_id",
        "c.preferred_name",
        "c.surname",
        "c.organization_name",
        "c.created_at as c_created_at",
        "c.updated_at as c_updated_at",
    )
    .where({ review_id: updatedReview.review_id})
    .first()
    .then(addCritic)

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
    readReviewsForMovie,
    update,
    delete: destroy,
}