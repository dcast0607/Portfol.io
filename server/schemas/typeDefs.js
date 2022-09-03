const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input projectsBody {
    projectName: String
    projectUrl: String
    projectPreview: String
  }

  input resumeBody {
    resumeUrl: String
    resumePreview: String
  }

  input portfolioBody {
    portfolioStyle: String!
    name: String
    bio: String
    portrait: String
    title: String
    projects: [String]
    resume: [String]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    portfolio : [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePortfolio(input: portfolioBody!): User
  }
`;

module.exports = typeDefs;