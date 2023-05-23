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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message.includes("syntax")) console.log("syntax error");
      console.log(
        `[Ошибка GraphQL]: Сообщение: ${message}, местонахождение: ${locations}, путь: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Сетевая ошибка]: ${networkError}`);
  }
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
  //link: from([setHeaders.concat(httpLink), errorLink]),
  //link: from([httpLink, errorLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
