const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const resumeSchema = new Schema({
  resumeUrl: {
    type: String,
    required: true,
  },
  resumePreview: {
    type: String,
    required: true,
  },
});

module.exports = resumeSchema;
