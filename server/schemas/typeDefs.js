const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input projectBody {
    projectName: String
    projectUrl: String
    projectPreview: String
  }

  input portfolioBody {
    portfolioStyle: String!
    name: String
    bio: String
    portrait: String
    title: String
    resumeUrl: String
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
    saveProject(input: projectBody!): User
  }
`;

module.exports = typeDefs;