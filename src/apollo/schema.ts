import { gql } from '@apollo/client';

export const SCHEMA = gql`
  query getSchema($name: String!) {
    __type(name: $name) {
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
