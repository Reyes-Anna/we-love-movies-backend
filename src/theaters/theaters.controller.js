const service = require("./theaters.service")
const reduceProperties = require("../utils/reduce-properties")

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