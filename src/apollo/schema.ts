import { gql } from '@apollo/client';

export const SCHEMA = gql`
  query getSchema($query: String!) {
    __type(name: $query) {
      name
      description
      fields {
        name
        description
        type {
          name
        }
      }
    }
  }
`;
