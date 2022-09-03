const { Schema } = require('mongoose');
const projectSchema = require('./Projects')
const resumeSchema = require('./Resume')

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
  },
  projects: {
    type: [projectSchema]
  },
  resume: [resumeSchema]
});

module.exports = portfolioSchema;
