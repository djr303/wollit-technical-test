import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './graphql/fragmentTypes.json';

const API_ENDPOINT = 'http://localhost:4000'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const httpLink = new HttpLink({ uri: API_ENDPOINT })
const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache,
  link: httpLink,
});

export default client