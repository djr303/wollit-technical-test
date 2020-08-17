import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppContainer from "./components/AppConatiner";
import { ApolloProvider } from "react-apollo";
import client from './apolloClient'

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById("root")
);

