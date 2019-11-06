exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'BuildTheWorld API',
      description: 'BuildTheWorld with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: process.env.SWAGGER_HOST_PORT,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}