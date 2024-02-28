const service = require("./theaters.service")
const reduceProperties = require("../utils/reduce-properties")

async function list(req, res, next) {
    const data = await service.list()
    const reduceTheaters = 
    reduceProperties("theater_id", {
        address_line_1: ["theaters", null, "address_line_1"],
        address_line_2: ["theaters", null, "address_line_2"],
        city: ["theaters", null, "city"],
        movies: [{
            movie_id: ["movies", null, "movie_id"],
            rating: ["movies", null, "rating"],
            runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
            title: ["movies", null, "title"],
        }],
        name: ["theaters", null, "name"],
        state: ["theaters", null, "state"],
        zip: ["theaters", null, "zip"]
    })
    res.json(reduceTheaters(data))
    }

module.exports = {
    list,
}