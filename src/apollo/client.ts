import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
//import { DefaultContext } from "@apollo/client";
import { headersForRequest } from "../Components/GraphiQLField";

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql', 
});


/* const headers: DefaultContext = {
  
  "Accept-Language": "ru-RU",
  "user-agent": "Chrome/112.0.0.0 Safari/537.36",
  "scheme": "http"
      
}; */

const setHeaders = setContext(( /* headers */ ) => {
  
  return {
    headers:  {
      ...headersForRequest,
      /* "Accept-Language": "ru-RU",
      "user-agent": "Chrome/112.0.0.0 Safari/537.36",
      "scheme": "http" */
      
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
