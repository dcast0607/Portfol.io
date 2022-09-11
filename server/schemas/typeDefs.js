const { gql } = require('apollo-server-express');

//for User, do I use the portfolio schema instead of [String]??
//OR should I create a new model called Portfolio and use the associated UserId to store the users info??

//Also need help with input types

const typeDefs = gql`
  type Project {
    projectName: String
    projectUrl: String
    projectPreview: String
  }

  type Portfolio {
    portfolioStyle: String
    name: String
    bio: String
    portrait: String
    title: String
    resumeUrl: String
    projects: [Project]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    portfolio: [Portfolio]
  }

  type Auth {
    token: ID
    user: User
  }

  input projectBody {
    projectName: String
    projectUrl: String
    projectPreview: String
  }

  input portfolioBody {
    portfolioStyle: String
    name: String
    bio: String
    portrait: String
    title: String
    resumeUrl: String
    projects: [projectBody]
  }

  type Query {
    me: User
    portfolio(_id: String): Portfolio
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePortfolio(input: portfolioBody!): User
    editPortfolio(input: portfolioBody!): User
  }
`;

module.exports = typeDefs;