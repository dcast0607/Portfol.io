const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/no-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(mongoose.connection);

module.exports = mongoose.connection;