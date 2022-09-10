const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    },
  projectUrl: {
    type: String,
    required: true,
  },
  projectPreview: {
    type: String,
    required: true,
  },
  
});

module.exports = projectSchema;
