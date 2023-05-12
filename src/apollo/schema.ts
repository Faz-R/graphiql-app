import { gql } from '@apollo/client';

export const SCHEMA = gql`
  query Schema {
    schema: __schema {
      list: queryType {
        name
        fields {
          name
          description
        }
      }
    }
  }
`;
