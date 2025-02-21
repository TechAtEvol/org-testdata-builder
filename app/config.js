const mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost'
const mongoDbPort = process.env.MONGODB_PORT || 27017
const mongoDbConnectionString = `${mongoDbUrl}:${mongoDbPort}`

module.exports = {
  mongoDbUrl,
  mongoDbPort,
  mongoDbConnectionString
}
