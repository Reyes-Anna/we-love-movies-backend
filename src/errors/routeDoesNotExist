function routeDoesNotExist(request, response, next) {
  next({ status: 404, message: `Cannot be found: ${request.originalUrl}` });
}

module.exports = routeDoesNotExist;
