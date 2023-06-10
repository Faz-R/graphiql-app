import { gql } from "@apollo/client";
import client from "../apollo/client";

export const graphqlRequest = async (
  request: string,
  variables: object | undefined
) => {
  const DATA_RESPONSE = gql`
    ${request}
  `;

  const data = await client.query({
    query: DATA_RESPONSE,
    variables,
    errorPolicy: "all",
  });

  return data;
};
