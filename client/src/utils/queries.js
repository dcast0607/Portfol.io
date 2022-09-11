import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      portfolio {
        portfolioStyle
        name
        contactEmail
        bio
        portrait
        title
        resumeUrl
        projects
      }
    }
  }
`;

export const QUERY_PORTFOLIO = gql`
  query portfolio($_id: String) {
    portfolio(_id: $_id) {
      portfolioStyle
      name
      contactEmail
      bio
      portrait
      title
      resumeUrl
      projects
    }
  }
`;