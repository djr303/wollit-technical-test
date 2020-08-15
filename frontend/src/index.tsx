import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppContainer from "./components/AppConatiner";
import { ApolloProvider } from "react-apollo";
import ApolloBoost from "apollo-boost";
import { API_ENDPOINT } from './common/constants'

const client = new ApolloBoost({
  uri: API_ENDPOINT
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById("root")
);

