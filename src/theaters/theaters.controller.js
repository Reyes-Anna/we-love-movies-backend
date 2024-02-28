const service = require("./theaters.service")
const reduceProperties = require("../utils/reduce-properties")

// async function list(req, res, next) {
//     const data = await service.list()
//     const reduceTheaters = 
//     reduceProperties("theater_id", {
//         theater_id: ["theaters", "theater_id"],
//         address_line_1: ["theaters", null, "address_line_1"],
//         address_line_2: ["theaters", null, "address_line_2"],
//         city: ["theaters", null, "city"],
//         movie_id: ["movies", "movie_id"],
//         rating: ["movies", null, "rating"],
//         runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
//         title: ["movies", null, "title"],
//         name: ["theaters", null, "name"],
//         state: ["theaters", null, "state"],
//         zip: ["theaters", null, "zip"],
//     })
//         res.json(reduceTheaters(data), null, 4)
//     }

async function list(request, response, next) {
    const theaters = await service.list();
  
    for (let theater of theaters) {
      const movieList = await service.addMovieList(theater.theater_id);
      theater["movies"] = movieList;
    }
    response.json({ data: theaters });
  }

module.exports = {
    list,
}