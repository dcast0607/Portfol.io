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
        bio
        portrait
        title
        resumeUrl
        projects
      }
    }
  }
`;