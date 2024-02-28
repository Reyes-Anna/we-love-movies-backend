//require movies service
const service = require("./movies.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists( req, res, next) {
    const { movieId } = req.params
    const movie = await service.read(movieId)

    if (movie) {
      res.locals.movie = movie
      return next()
    }
    next({ status: 404, message: `Movie id not found: ${movieId}` })
}

async function list(req, res, next) {
    const is_showing = req.query.is_showing;
    let data = []
    if(is_showing) {
        data = await service.listShowingMovies()
    } else {
        data = await service.list()
    }
res.json({ data })
}

async function read(req, res, next) {
    const {movieId} = req.params
    res.json({ data: await service.read(movieId) });
}

module.exports = {
    list,
    read: [asyncErrorBoundary(movieExists), read],
}