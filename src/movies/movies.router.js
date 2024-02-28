const router = require("express").Router({mergeParams:true})
const methodNotAllowed = require("../errors/methodNotAllowed")
const controller = require("./movies.controller")
const theatersRouter = require("../theaters/theaters.router")
const reviewsRouter = require("../reviews/reviews.router")

router.route("/:movieId/reviews").get(reviewsRouter).all(methodNotAllowed)
router.route("/:movieId/theaters").get(theatersRouter).all(methodNotAllowed)

router.route("/:movieId")
.get(controller.read)
.all(methodNotAllowed)

router.route("/?is_showing=true")
.get(controller.listShowingMovies)
.all(methodNotAllowed)

router.route("/")
.get(controller.list)
.all(methodNotAllowed)

module.exports = router

