const router = require("express").Router({mergeParams:true})
const methodNotAllowed = require("../errors/methodNotAllowed")
const controller = require("./movies.controller")
const theatersRouter = require("../theaters/theaters.router")
const reviewsRouter = require("../reviews/reviews.router")

router.use("/:movieId/reviews", reviewsRouter)
router.use("/:movieId/theaters", theatersRouter)

router.route("/:movieId")
.get(controller.read)
.all(methodNotAllowed)

router.route("/")
.get(controller.list)
.all(methodNotAllowed)

module.exports = router

