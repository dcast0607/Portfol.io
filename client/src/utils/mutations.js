import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_PORTFOLIO = gql`
  mutation savePortfolio($input: portfolioBody!) {
    savePortfolio(input: $input) {
      _id
      username
      portfolio {
        portfolioStyle
        name
        contactEmail
        bio
        portrait
        title
        resumeUrl
      }
    }
  }
`

export const SAVE_PROJECT = gql`
  mutation saveProject($input: projectBody!) {
    saveProject(input: $input) {
      not sure what to return yet
    }
  }
`

export const EDIT_PORTFOLIO = gql`
  mutation editPortfolio($input: portfolioBody!) {
    editPortfolio(input: $input) {
      _id
      username
      portfolio {
        portfolioStyle
        name
        contactEmail
        bio
        portrait
        title
        resumeUrl
      }
    }
  }
`

