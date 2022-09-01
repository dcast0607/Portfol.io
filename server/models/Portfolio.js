const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const portfolioSchema = new Schema({
portfolioStyle: {
    type: String,
    required: true,
    },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  portrait: {
    type: String,
  },
  title: {
    type: String,
  }
});

module.exports = portfolioSchema;
