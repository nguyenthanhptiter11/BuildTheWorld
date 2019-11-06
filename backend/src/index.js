const mongoose = require('mongoose')

const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

routes.forEach((route, index) => {
  fastify.route(route)
 })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

const uri = 'mongodb://' + process.env.MONGODB_ATLAS_USER + ':' + process.env.MONGODB_ATLAS_PW +
    '@node-js-mongoose-shard-00-00-554zu.mongodb.net:27017,' +
    'node-js-mongoose-shard-00-01-554zu.mongodb.net:27017,' +
    'node-js-mongoose-shard-00-02-554zu.mongodb.net:27017/' + process.env.MONGODB_ATLAS_DB_NAME +
    '?ssl=true&replicaSet=node-js-mongoose-shard-0&authSource=admin&retryWrites=true'
const port = process.env.LOCAL_PORT
mongoose.connect(uri,
{
    useNewUrlParser: true
})
.then(() => {
  console.log('MONGOOSE CONNECT SUCESS: ' + port)
  start()
},
err => {
    console.log('MONGOOSE CONNECT ERROR', err)
})