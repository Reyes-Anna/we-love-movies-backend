const router = require("express").Router()
const methodNotAllowed = require("../errors/methodNotAllowed")
const controller = require("./movies.controller")
const cors = require("cors")

router.route("/")
.get(cors(), controller.list)
.all(methodNotAllowed)

module.exports = router

