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
        projects {
          projectName
          projectUrl
          projectPreview
        }
      }
    }
  }
`;

export const QUERY_PORTFOLIO = gql`
  query portfolio($_id: String) {
    portfolio(_id: $_id) {
      portfolioStyle
      name
      bio
      portrait
      title
      resumeUrl
      projects {
        projectName
        projectUrl
        projectPreview
      }
    }
  }
`;