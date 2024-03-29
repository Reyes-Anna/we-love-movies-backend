const router = require("express").Router({mergeParams:true})
const methodNotAllowed = require("../errors/methodNotAllowed")
const controller = require("./reviews.controller")

router.route("/:reviewId")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed)

router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router