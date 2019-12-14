require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_DB_URI,
  apiPATH: '/api',
  apiVersion: '/v1',
  serverUrl: '',
  secretJwtKey: process.env.SECRET_JWT_KEY || 'default secret key',
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientKey: process.env.GOOGLE_CLIENT_SECRET_KEY,
  mongoDbUri: process.env.MONGO_DB_URI || 'mongo://127.0.0.1:27017/'
};
