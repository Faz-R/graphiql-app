import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { headersForRequest } from "../Components/GraphiQLField";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const setHeaders = setContext(() => {
  return {
    headers: {
      ...headersForRequest,
    },
  };
});

const client = new ApolloClient({
  link: setHeaders.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
