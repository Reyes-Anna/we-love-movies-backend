const service = require("./reviews.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function reviewExists(req, res, next) {
    const reviews = await service.read(req.params.reviewId)
    if (reviews) {
        res.locals.reviews = reviews
        return next()
    }
    next({
        status: 404,
        message: `Review cannot be found`
    })
}

async function list(req, res, next) {
    res.json({ data: await service.list() })
    }

async function update(req, res, next) {
    const updatedReview =  {
        ...req.body.data,
        review_id: res.locals.review.review_id,
    }

   const data = await service.update(updatedReview)
    res.json ({ data })
}

 async function destroy(req, res, next) {
   const {reviews} = res.locals
   await service.delete(reviews.review_id)
   res.sendSatus(204)
}
module.exports ={
 list,
 update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
 delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}