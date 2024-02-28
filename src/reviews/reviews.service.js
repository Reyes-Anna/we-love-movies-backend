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
    return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id})
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords[0])
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