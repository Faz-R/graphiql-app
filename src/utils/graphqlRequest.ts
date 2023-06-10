import { gql } from "@apollo/client";
import client from "../apollo/client";

export const graphqlRequest = async (
  responseText: string,
  variables: object | undefined
) => {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;

  const data = await client.query({
    query: DATA_RESPONSE,
    variables: variables,
    errorPolicy: "all",
  });

  return data;
};