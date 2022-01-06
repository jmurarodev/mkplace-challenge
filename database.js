require('dotenv').config({ path: './variables.env' });
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
module.exports = connectToDatabase = async () => {
  if (isConnected) return Promise.resolve();

  try {
    const db = await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    return db.connections[0].readyState;
  } catch (err) {
    console.error(err);
    return false;
  }
};