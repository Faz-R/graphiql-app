import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
//import { DefaultContext } from "@apollo/client";
import { headersForRequest } from "../Components/ResponseFieldWithApollo";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

/* const headers: DefaultContext = {
  
  "Accept-Language": "ru-RU",
  "user-agent": "Chrome/112.0.0.0 Safari/537.36",
  "scheme": "http"
      
}; */

 type MessErr = {
  graphErr: string;
  netErr: string;
}

export const messError: MessErr = {
  graphErr: '',
  netErr: '',
}



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations }) => {
      locations
        ? (messError.graphErr = `[Error GraphQL]: Message: ${message}` + '\n' + `Location: Line: ${locations[0].line} Column: ${locations[0].column}`)
        : (messError.graphErr = `[Error GraphQL]: Message: ${message} `);
    });
  } else messError.graphErr = ``;

  if (networkError) {
    messError.netErr = `[Network error]: ${networkError}`;
    console.log('net err')
  }
  else messError.netErr = ``;
});

const setHeaders = setContext((/* headers */) => {
  return {
    headers: {
      ...headersForRequest,
      /* "Accept-Language": "ru-RU",
      "user-agent": "Chrome/112.0.0.0 Safari/537.36",
      "scheme": "http" */
    },
  };
});

const client = new ApolloClient({
  link: errorLink.concat(setHeaders.concat(httpLink)),  
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
