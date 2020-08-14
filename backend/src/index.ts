import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

import getStore from './store'

const store = getStore()

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { store }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
